import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();

    this.setState({
      movies,
      loading: false,
    })
  }

  componentDidMount() {
    this.fetchMovies();
  }



  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    const loadingElement = <div className="loading"> Carregando... </div>;

    return (
      <div data-testid="movie-list">
        { (loading) ? loadingElement : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
