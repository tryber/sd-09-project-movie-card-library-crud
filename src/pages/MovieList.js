import React, { Component } from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';

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

  async componentDidMount() {
    return movieAPI.getMovies()
      .then((resp) => this.setState({ movies: resp, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Router>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </Router>
      </div>
    );
  }
}

export default MovieList;
