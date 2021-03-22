import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      isLoaded: false,
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then(
        (result) => this.setState({
          isLoaded: true,
          movies: [...result],
        }),
      );
  }

  render() {
    const { movies, isLoaded } = this.state;

    // Render Loading here if the request is still happening
    if (!isLoaded) return <div>Carregando...</div>;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
