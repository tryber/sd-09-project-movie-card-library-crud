import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loaded: false,
    };
    this.readMovieApi = this.readMovieApi.bind(this);
  }

  componentDidMount() {
    this.readMovieApi();
  }

  readMovieApi() {
    this.setState({ loaded: false });
    movieAPI.getMovies()
      .then((movies) => {
        this.setState({ movies });
        this.setState({ loaded: true });
      });
  }

  render() {
    const { movies, loaded } = this.state;
    return (
      <div data-testid="movie-list">
        {loaded
          ? movies
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <div>Carregando...</div>}
      </div>
    );
  }
}

export default MovieList;
