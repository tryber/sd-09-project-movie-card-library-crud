import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.mapMovie = this.mapMovie.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovies().then((movie) => {
      this.setState({
        movies: movie,
        loading: false,
      });
    });
  }

  mapMovie() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  render() {
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {this.mapMovie()}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
