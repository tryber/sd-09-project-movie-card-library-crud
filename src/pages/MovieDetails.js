import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      movie: {},
    };

    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { match: { params: { id } } } = this.props;
    const movieData = await movieAPI.getMovie(id);
    this.setState({
      movie: movieData,
      isLoading: false,
    });
  }

  render() {
    const { movie, isLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (isLoading ? (
      <Loading />
    ) : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
        <Link to="/"> VOLTAR </Link>
      </div>
    ));
  }
}

MovieDetails.propTypes = {
  movie: {},
  image: PropTypes.string,
  title: PropTypes.string,
  storyline: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default MovieDetails;
