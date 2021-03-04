import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

const initialState = {
  loading: true,
  movies: [],
};
class MovieList extends Component {
  constructor() {
    super();
    this.renderMovieElement = this.renderMovieElement.bind(this);
    this.state = initialState;
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const { getMovies } = movieAPI;
    const requestReturn = await getMovies();
    this.setState({
      loading: false,
      movies: requestReturn,
    });
  }

  renderMovieElement() {
    const { movies } = this.state;
    return (
      movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
    );
  }

  render() {
    const { loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        { this.renderMovieElement() }
        <Link to="/movies/new" className="card-list-button">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
