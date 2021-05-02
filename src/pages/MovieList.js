import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
// import NewMovie from './NewMovie';
import Loading from '../components/Loading';
import '../App.css';

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
    movieAPI.getMovies()
      .then((sucess) => {
        this.setState({ movies: sucess, loading: false });
      });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <>
        <div data-testid="movie-list" className="movieList">
          { loading ? <Loading /> : movies
            .map((movie) => <MovieCard key={ movie.id } movies={ movie } />)}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </>
    );
  }
}

export default MovieList;
