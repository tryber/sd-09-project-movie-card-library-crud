import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      status: 'loading',
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movie) => {
      this.setState({
        movies: movie,
        status: 'loaded',
      });
    });
  }

  render() {
    const { movies, status } = this.state;

    if (status === 'loading') return <Loading />;

    return (
      <>
        <div data-testid="movie-list">
          {movies.map((movie) => (<MovieCard
            key={ movie.title }
            movie={ movie }
            status={ status }
          />))}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </>
    );
  }
}

export default MovieList;
