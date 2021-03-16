import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movieSelected: {},
    };
  }

  async componentDidMount() {
    const { id } = this.props;
    return movieAPI.getMovie(id).then((movie) => this.setState({ movieSelected: movie }));
  }

  deleteMovieCard(id) {
    movieAPI.deleteMovie(id);
  }

  linkHandler(id) {
    return (
      <div>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.deleteMovieCard(id) }>DELETAR</Link>
      </div>
    );
  }

  movieCardDetails() {
    const { movieSelected: { storyline, imagePath, genre, rating, title, subtitle, id },
    } = this.state;
    return (
      <div data-testid="movie-details" className="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ `../${imagePath}` } />
        <p className="movie-card-title">{ `Title: ${title}` }</p>
        <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
        <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
        <p className="movie-card-genre">{ `Genre: ${genre}` }</p>
        <p className="movie-card-rating">{ `Rating: ${rating}` }</p>
        {this.linkHandler(id)}
      </div>
    );
  }

  render() {
    const { movieSelected } = this.state;
    if (Object.keys(movieSelected).length === 0) return <Loading />;
    return this.movieCardDetails();
  }
}

MovieDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default MovieDetails;
