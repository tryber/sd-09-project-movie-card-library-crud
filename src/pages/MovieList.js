import React, { Component } from 'react';
import Loading from '../components/Loading';
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
    try {
      const response = await movieAPI.getMovies();
      this.setState({
        movies: response,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movies } = this.state;
    console.log(movies);

    return (
      <div data-testid="movie-list">
        {movies.length > 0
          ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading />}
      </div>
    );
  }
}

export default MovieList;
