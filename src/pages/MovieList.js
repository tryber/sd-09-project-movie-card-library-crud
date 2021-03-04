import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'
import { getMovies } from '../services/movieAPI'

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({isLoading: true})

    const movies = await getMovies()

    this.setState({
      movies,
      isLoading: false,
    })
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (this.state.isLoading === true) {
      return <Loading loadingMessage='Carregando...' />
    } else {
      return (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      );
    }


  }
}

export default MovieList;
