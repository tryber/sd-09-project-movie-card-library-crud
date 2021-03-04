import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Route } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then(response => this.setState({ movies: response }));
  }
  render() {
    const { movies } = this.state;
    if(movies.length === 0) return <Loading />
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
