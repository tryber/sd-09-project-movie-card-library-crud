import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.renderMovieElement = this.renderMovieElement.bind(this);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const { getMovies } = movieAPI;
    const requestReturn = await getMovies();
    this.setState({
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
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { movies.length !== 0 ? this.renderMovieElement() : <Loading /> }
      </div>
    );
  }
}

export default MovieList;
