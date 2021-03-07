import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';


class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.state = {
      movie: {},
      loading: true,
      id,

    };

    this.showMovie = this.showMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState(
      { loading: true },

      async () => {
        const { id } = this.state;
        const requestMovie = await movieAPI.getMovie(id);
        this.setState({
          movie: requestMovie,
          loading: false,
    
        });
      },
    );
  }

  showMovie() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">

        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to={"/"}>VOLTAR</Link>

      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading } = this.state;
    return (loading ? <Loading /> : this.showMovie());
  }
}

MovieDetails.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,

  }).isRequired,

}.isRequired;

export default MovieDetails;
