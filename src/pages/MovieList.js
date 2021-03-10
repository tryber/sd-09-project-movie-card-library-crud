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
    // Render Loading here if the request is still happening
    return (
      <div>
        {loadingState ? <Loading />
          : <div data-testid="movie-list">
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
            <p>Voce esta em movie list</p>
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
            {/* eslint-disable-next-line react/jsx-closing-tag-location */}
          </div>}
      </div>
    );
  }
}

export default MovieList;
