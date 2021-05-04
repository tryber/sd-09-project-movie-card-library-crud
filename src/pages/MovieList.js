import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getMovies } from '../services/movieAPI';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    getMovies().then((response) => {
      this.setState({
        movies: response,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie, index) => (
            <MovieCard
              key={ movie.title }
              movie={ movie }
              index={ index }
            />))}
        </div>
        <button type="button"><Link to="/movies/new">ADICIONAR CARTÃO</Link></button>
      </div>
    );
  }
}

export default MovieList;
