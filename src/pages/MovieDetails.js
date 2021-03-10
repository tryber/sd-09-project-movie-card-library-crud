import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      movie: {},
      hasFetched: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    try {
      const response = await movieAPI.getMovie(id);
      this.setState({
        movie: response,
        hasFetched: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movie, hasFetched } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (!hasFetched) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ title }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <p><Link to={ `/movies/${id}/edit` }>EDITAR</Link></p>
        <p><Link to="/">VOLTAR</Link></p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
  match: PropTypes.objectOf().isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieDetails;
