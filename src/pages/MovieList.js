import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then(
      (films) => this.setState({ movies: films }),
    );
  }

  render() {
    const { movies } = this.state;
    const loadingComponent = <Loading />;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}

        <p>{movies ? movies.films : loadingComponent}</p>
      </div>
    );
  }
}

export default MovieList;
