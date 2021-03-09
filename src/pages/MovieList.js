import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.loadingMovies = this.loadingMovies.bind(this);
  }

  // Render Loading here if the request is still happening
  componentDidMount() {
    this.loadingMovies();
  }

  async loadingMovies() {
    this.setState(
      { loading: true },
      async () => {
        const requestMovie = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: requestMovie,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <>
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </>
    );
  }
}

export default MovieList;
