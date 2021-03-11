import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    const loadingEl = <div>Carregando...</div>;

    return (
      <div data-testid="movie-list">
        {(loading) ? loadingEl : movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
