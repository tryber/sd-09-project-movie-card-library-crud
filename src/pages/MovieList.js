import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((data) => {
      this.setState({
        movies: data,
        loading: true,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (!loading) return <Loading />;
    return (
      <div data-testid="movie-list">
        { movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />)) }
      </div>
    );
  }
}

export default MovieList;
