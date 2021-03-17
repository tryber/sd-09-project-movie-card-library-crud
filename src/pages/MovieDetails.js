import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: '',
      link: '',
      loading: false,
    };

    this.getSelectedMovie = this.getSelectedMovie.bind(this);
  }

  componentDidMount() {
    this.getSelectedMovie();
  }

  async getSelectedMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;
    const data = await getMovie(id);
    this.setState({
      movies: data,
      link: `/movies/${id}/edit`,
      loading: true,
    });
  }

  render() {
    const { movies, link, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;
    if (loading) {
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h3>{ title }</h3>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to={ link }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      );
    }
    return (<Loading />);
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
