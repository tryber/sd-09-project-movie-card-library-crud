import React, { Component } from 'react';
import { getMovies } from '../services/movieAPI';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  async componentDidMount() {
    getMovies().then((response) => {
      this.setState({
        movies: response,
      }, () => console.log(this.state.movies))
    })
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div
        data-testid="movie-list"
        className="movie-list"
      >
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
