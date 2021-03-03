import React, { Component } from 'react';
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
      <div data-testid="movie-list" className="card-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
