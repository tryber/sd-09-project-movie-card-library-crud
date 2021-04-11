import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loaded: false,
    };
    this.readMovieApi = this.readMovieApi.bind(this);
    this.renderMovieCard = this.renderMovieCard.bind(this);
  }

  componentDidMount() {
    this.readMovieApi();
  }

  readMovieApi() {
    this.setState({ loaded: false });
    movieAPI.getMovies()
      .then((movies) => {
        this.setState({ movies });
        this.setState({ loaded: true });
      });
  }

  renderMovieCard(movies) {
    const listmovies = movies;
    return (
      <>
        { listmovies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </>
    );
  }

  render() {
    const { movies, loaded } = this.state;
    return (
      <div data-testid="movie-list">
        {loaded
          ? this.renderMovieCard(movies)
          : <div>Carregando...</div>}
      </div>
    );
  }
}

export default MovieList;
