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
  }

  // Muito obrigada Layo, Henrique e Rafa pela ajuda!
  componentDidMount() {
    movieAPI.getMovies().then((result) => (
      this.setState({ movies: result, loading: false })));
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        { movies.map((movie) => (
          <MovieCard
            key={ movie.title }
            movie={ movie }
            image={ movie.imagePath }
            title={ movie.title }
            storyline={ movie.storyline }
          />))
        }
      </div>
    );
  }
}

export default MovieList;
