import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import './MovieList.css';

const initialState = {
  loading: true,
  movies: [],
};

class MovieList extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const requestReturn = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: requestReturn,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div className="card-list-body">
        <div data-testid="movie-list" className="card-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <div className="card-list-button-section">
          <Link to="/movies/new" className="card-list-button">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
