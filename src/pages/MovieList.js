import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.handleMovies = this.handleMovies.bind(this);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.handleMovies();
  }

  handleMovies() {
    const moviesFromApi = getMovies();
    moviesFromApi.then((movies) => {
      this.setState({
        movies,
      });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        { movies.length !== 0
          ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading />}
      </div>
    );
  }
}

export default MovieList;
