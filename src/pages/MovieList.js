import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.requisitionOfFilms = this.requisitionOfFilms.bind(this);

    this.state = {
      loadingCheck: true,
      movies: [],
    };
  }

  async componentDidMount() {
    this.requisitionOfFilms();
  }

  async requisitionOfFilms() {
    const resultsGetMovies = await movieAPI.getMovies();
    this.setState(({ movies }) => ({
      movies: [...movies, ...resultsGetMovies],
      loadingCheck: false,
    }));
  }

  // <button data-testid="new-movie" onClick={() => this.props.history.push("/movies/new")}>
  //   ADICIONAR CARTÃO
  // </button>
  render() {
    const { movies, loadingCheck } = this.state;

    // Render Loading here if the request is still happening

    const moviesElement = (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );

    return (
      <div>
        { loadingCheck ? <Loading /> : moviesElement }
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }),
};

MovieList.defaultProps = {
  movie: 'Object not received',
};

export default MovieList;
