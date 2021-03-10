import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    this.setState(
      { isLoading: true },
      async () => {
        const moviesArray = await movieAPI.getMovies();
        // const moviesArray = await moviesPromise.json();
        this.setState({
          isLoading: false,
          movies: moviesArray,
        });
      },
    );
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      isLoading ? <Loading />
        : (
          <div data-testid="movie-list">
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          </div>
        )
    );
  }
}

export default MovieList;
