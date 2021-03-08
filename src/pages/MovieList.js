import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
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
    const movieList = await movieAPI.getMovies();
    this.setState({ movies: movieList });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default MovieList;
