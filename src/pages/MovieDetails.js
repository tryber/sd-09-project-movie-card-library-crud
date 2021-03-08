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

  movieDetailsButtons(movie) {
    return (
      <div className="movie-details-buttons">
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }

  movieDetails(movie) {
    const { title, storyline, genre, rating, subtitle } = movie;
    return (
      <div className="movie-details">
        <p>Title:
          <div className="movie-details-title">{`${title}`}</div>
        </p>
        <p>Subtitle:
          <div className="movie-details-subtitle">{`${subtitle}`}</div>
        </p>
        <p>Storyline:
          <div className="movie-details-storyline">{`${storyline}`}</div>
        </p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
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
