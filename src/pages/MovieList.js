import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((value) => this.setState({ movies: value }));
  }

  render() {
    const { movies } = this.state;
    if (movies.length < 1) return <Loading />;
    if (movies.length > 0) console.log(movies);
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
