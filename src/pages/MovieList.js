import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import '../styles/Pages/MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.getMovieList = this.getMovieList.bind(this);
  }

  async componentDidMount() {
    const moviesList = await movieAPI.getMovies();
    this.getMovieList(moviesList);
  }

  getMovieList(moviesList) {
    this.setState({
      movies: moviesList,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div className="movie-list-container" data-testid="movie-list">
        { (loading) ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        ) }
      </div>
    );
  }
}

export default MovieList;
