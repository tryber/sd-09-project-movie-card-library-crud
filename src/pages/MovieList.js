import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <div>
        <div className="movie-list" data-testid="movie-list">
          {loading ? (
            <Loading />
          ) : (
            movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          )}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
