import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';
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
    this.setState(
      { loading: true },
      async () => {
        const fetchedMovies = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: fetchedMovies,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list" className="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        { loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
