import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { MovieCard, Loading } from '../components';


class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setMovies();
  }
  setMovies() {
    this.setState({ loading: true }, async () => {
      const moviesResp = await movieAPI.getMovies();
      this.setState({ movies: moviesResp, loading: false });
    });
  }
  render() {
    const { movies, loading } = this.state;
    return (
      <div>
        <div data-testid="movie-list">
          {loading
            ? <Loading />
            : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />,
            )
          }
        </div>
        <Link to="/movies/new" >ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
