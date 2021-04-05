import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  // Muito obrigada Layo, Henrique e Rafa pela ajuda!
  componentDidMount() {
    movieAPI.getMovies().then((result) => (
      this.setState({ movies: result, loading: false })));
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <main>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list" className="movie-list">
          { movies.map((movie) => (
            <MovieCard
              key={ movie.id }
              movie={ movie }
            />
          ))}
        </div>
      </main>
    );
  }
}

export default MovieList;
