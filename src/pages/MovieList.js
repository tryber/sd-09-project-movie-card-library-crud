import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true
    };
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const getMovies = await movieAPI.getMovies();
        this.setState({
          movies: getMovies,
          loading: false,
        })
      }
    )
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <div>{ loading ? <Loading /> : null }</div>
      </div>
    );
  }
}

export default MovieList;
