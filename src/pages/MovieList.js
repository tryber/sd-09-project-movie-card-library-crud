import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMoviesFromAPI();
  }

  async fetchMoviesFromAPI() {
    this.setState(
      { loading: true },
      async () => {
        const fetchMovies = await movieAPI.getMovies();
        this.setState({
          movies: fetchMovies,
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </>
    );
  }
}

export default MovieList;
