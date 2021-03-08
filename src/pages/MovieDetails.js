import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

import './MovieDetails.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    this.fetchMovie(match.params.id);
  }

  async fetchMovie(id) {
    const movieDetails = await movieAPI.getMovie(id);
    this.setState({
      movie: movieDetails,
      loading: false,
    });
  }

  movieDetailsAbout(movie) {
    const { title, storyline, subtitle } = movie;
    return (
      <>
        <p>
          Title:
          <div className="movie-details-title">{`${title}`}</div>
        </p>
        <p>
          Subtitle:
          <div className="movie-details-subtitle">{`${subtitle}`}</div>
        </p>
        <p>
          Storyline:
          <div className="movie-details-storyline">{`${storyline}`}</div>
        </p>
      </>
    );
  }

  movieDetailsButtons(movie) {
    return (
      <div className="movie-details-buttons">
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/">DELETAR</Link>
      </div>
    );
  }

  movieDetails(movie) {
    const { genre, rating } = movie;
    return (
      <div className="movie-details">
        { this.movieDetailsAbout(movie) }
        <p>
          Genre:
          <div className="movie-details-genre">{`${genre}`}</div>
        </p>
        <p>
          Rating:
          <div className="movie-details-rating">{`${rating}`}</div>
        </p>
        { this.movieDetailsButtons(movie) }
      </div>
    );
  }

  createMovieCard(movie) {
    const { imagePath } = movie;
    return (
      <div className="movie-details-container">
        <div className="movie-details-image">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
        </div>
        { this.movieDetails(movie) }
      </div>
    );
  }

  render() {
    const { movie, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        {this.createMovieCard(movie)}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default MovieDetails;
