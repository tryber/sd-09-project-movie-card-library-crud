import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fecthMovie = this.fecthMovie.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fecthMovie();
  }

  fecthMovie() {
    this.setState({
      loading: true,
    }, async () => {
      const response = await movieAPI.getMovies();
      this.setState({
        movies: response,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div className="movie-list" data-testid="movie-list">
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        )}
      </div>
    );
  }
}

export default MovieList;
