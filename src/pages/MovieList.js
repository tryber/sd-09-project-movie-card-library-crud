import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movies: [],
      isLoading: false,
    };
  }

  async fetchMovies() {
    this.setState({isLoading: true})

    const movies = await movieAPI.getMovies()

    this.setState({
      movies,
      isLoading: false,
    })
  }

  componentDidMount() {
    this.fetchMovies()
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (this.state.isLoading === true) {
      return <Loading />
    } else 
      return (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      );
    }

}

export default MovieList;
