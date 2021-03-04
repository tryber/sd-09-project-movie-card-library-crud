import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.getMovies = this.getMovies.bind(this);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    try {
      const movies = await movieAPI.getMovies();
      this.setState({ movies });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { (movies.length === 0)
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
