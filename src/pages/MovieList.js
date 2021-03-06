import React, { Component } from 'react';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import MovieCard from '../components/MovieCard';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then(
      (filmes) => this.setState({
        movies: filmes,
      }),
    );
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        { movies.length === 0 ? <Loading /> : movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
