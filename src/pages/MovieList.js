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
    movieAPI.getMovies()
      .then((result) => this.setState({ movies: result, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <span>Carregando...</span>;

    return (
      <div>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <p>Teste</p>
      </div>
    );
  }
}

export default MovieList;
