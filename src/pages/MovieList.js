import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
// import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <BrowserRouter>
        <div data-testid="movie-list">
          <h1> Movie List</h1>
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </BrowserRouter>
    );
  }
}

export default MovieList;
