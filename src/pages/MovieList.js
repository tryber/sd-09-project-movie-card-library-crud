import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,

    };
    this.showMovies = this.showMovies.bind(this);
  }

  async fetchMovies() {
    this.setState(
      { loading: true },

      async () => {
        const requestMovies = await movieAPI.getMovies();
        this.setState({
          movies: requestMovies,
          loading: false,
    
        });
      }
    );
  }
  componentDidMount() {
    this.fetchMovies();
  }

  showMovies() {
    const { movies } = this.state;
    return (
      <div className="movies">
        Movie Card Library CRUD
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    // Render Loading here if the request is still happening
    const { loading } = this.state;

    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> : this.showMovies() }
        </div>
    );
  }
}

export default MovieList;
