import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.listMovies = this.listMovies.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.listMovies();
  }

  // Render Loading here if the request is still happening
  async listMovies() {
    this.setState(
      { loading: true },
      async () => {
        const movieP = await movieAPI.getMovies();
        this.setState({ movies: movieP, loading: false });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
