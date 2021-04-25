import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const moviesList = await movieAPI.getMovies();
    this.setState(({ movies }) => ({
      movies: [...movies, ...moviesList],
    }));
  }

  render() {
    const { movies } = this.state;
    function loadMovieList() {
      if (movies.length === 0) {
        return 'Carregando...';
      }
      return (
        <div>
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      );
    }

    return (
      <div data-testid="movie-list">
        { loadMovieList() }
      </div>
    );
  }
}

export default MovieList;
