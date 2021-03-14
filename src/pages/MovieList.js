import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Route } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';

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
      <div>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Route path="/" component="MovieList" />
        <Route path="/movies/:id" component="MovieDetails" />
        <Route path="/movies/new" component="NewMovie" />
        <Route path="/movies/:id/edit" component="EditMovie" />
        <Route path="" component="NotFound" />
      </div>
    );
  }
}

export default MovieList;
