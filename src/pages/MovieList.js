import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';
import './MovieList.css';

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
    const allMovies = await movieAPI.getMovies();
    this.setState({
      movies: allMovies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Link to="/movies/new" className="add-card-button">ADICIONAR CARTÃO</Link>
      </>
    );
  }
}

export default MovieList;
