import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      key: true,
    };

    this.getMovieObjects = this.getMovieObjects.bind(this);
  }

  componentDidMount() {
    this.getMovieObjects();
    console.log('teste');
  }

  async getMovieObjects() {
    const data = await movieAPI.getMovies();
    this.setState({
      movies: data,
      key: false,
    });
  }

  render() {
    const { movies, key } = this.state;
    console.log(movies);
    return (
      <div data-testid="movie-list">
        { key
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
