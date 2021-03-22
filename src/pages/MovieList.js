import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loadingState: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movieToBeAdded) => {
      this.setState({
        movies: movieToBeAdded,
        loadingState: false,
      });
    });
  }

  render() {
    const { movies, loadingState } = this.state;
    if (loadingState) {
      return (<Loading />);
    }
    return (
      <div>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
