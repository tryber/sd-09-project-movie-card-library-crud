import React, { Component } from 'react';
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
    // Render Loading here if the request is still happening
    const { movies, loading } = this.state;
    if (loading === true) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        { movies.map((movie) => (<MovieCard
          key={ movie.title }
          movie={ movie }
          status={ status }
          />)) }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
