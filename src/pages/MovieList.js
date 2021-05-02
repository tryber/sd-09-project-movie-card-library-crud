import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);
    this.disableLoadingMessage = this.disableLoadingMessage.bind(this);

    this.state = {
      movies: [],
      loading: 'loading',
    };
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.disableLoadingMessage();
    this.fetchMovie(movies);
  }

  fetchMovie(movies) {
    this.setState({ movies });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading === 'loading') return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        { movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />)) }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}
export default MovieList;
