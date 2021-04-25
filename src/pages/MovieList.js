import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const newMovies = movieAPI.getMovies();
    newMovies.then((response) => {
      this.setState({
        movies: response,
      });
    });
  }

  loading() {
    return (
      <p>Carregando...</p>
    );
  }

  renderMoviesOrLoading() {
    const { movies } = this.state;
    if (movies.length === 0) {
      return this.loading();
    }
    return (
      <div>
        <p>Carregou os filmes</p>
      </div>
    );
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        <p>MovieList</p>
        {this.renderMoviesOrLoading()}
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
