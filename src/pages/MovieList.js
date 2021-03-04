import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      error: '',
      isLoaded: false,
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then(
        (result) => this.setState({
          isLoaded: true,
          movies: result,
        }),
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { movies, isLoaded, error } = this.state;

    // Render Loading here if the request is still happening
    if (error) {
      return <div>Error: { error.message }</div>;
    } else if (!isLoaded) {
      return <div>Carregando...</div>;
    } else {
      return (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      );
    }
  }
}

export default MovieList;
