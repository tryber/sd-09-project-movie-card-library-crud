import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
    };

    this.fetchMoviesApi = this.fetchMoviesApi.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMoviesApi();
  }

  async fetchMoviesApi() {
    const { match: { params: { id } } } = this.props;
    const movieDetails = await movieAPI.getMovie(id);
    this.setState({ movie: movieDetails });
  }

  deleteMovie(movieId) {
    movieAPI.deleteMovie(movieId);
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (Object.keys(movie).length === 0) return (<Loading />);
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => { this.deleteMovie(id); } }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
