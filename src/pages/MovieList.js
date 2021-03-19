import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      status: 'loading',
      movies: [],
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const response = await movieAPI.getMovies();
    this.setState({
      status: 'ready',
      movies: response,
    });
  }

  render() {
    const { movies, status } = this.state;

    if (status === 'loading') {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
