import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoadingData: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then(
      (data) => this.setState({ movies: data, isLoadingData: false }),
    );
  }

  render() {
    const { movies, isLoadingData } = this.state;

    // Render Loading here if the request is still happening
    if (isLoadingData) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
