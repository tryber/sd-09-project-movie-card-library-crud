import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import '../App.css';

class MovieList extends Component {
  constructor() {
    super();
    this.getMovies = this.getMovies.bind(this);
    this.Cards = this.Cards.bind(this);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
    });
  }

  Cards(movies) {
    return movies.map((movie) => (
      <MovieCard
        key={ movie.title }
        movie={ movie }
      />
    ));
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.length > 0 ? this.Cards(movies) : <Loading />}
      </div>
    );
  }
}

export default MovieList;
