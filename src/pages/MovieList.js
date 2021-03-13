import React, { Component } from 'react';
import { Loading } from '../components';
import Home from '../components/Home';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    const arr = await movies;
    this.setState(() => ({
      movies: [...arr],
    }));
    this.setState({ loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {(loading)
          ? <Loading />
          : <Home movies={ movies } />}
      </div>
    );
  }
}

export default MovieList;
