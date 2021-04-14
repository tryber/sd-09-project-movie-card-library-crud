import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMoviesList();
  }

  async fetchMoviesList() {
    try {
      const response = await getMovies();
      this.setState({
        movies: response,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (movies.length < 1) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
