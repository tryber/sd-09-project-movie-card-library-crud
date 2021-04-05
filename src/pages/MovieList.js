import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movie) => {
      this.setState({
        movies: movie,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        <div className="movies">
          <div className="movie-list">
            {movies.map((movie) => (
              <MovieCard key={ movie.title } movie={ movie } />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
