import React, { Component } from 'react';
import Home from '../components/Home';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';
import '../styles/movieList.css';

// import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.addMoviesfromApi = this.addMoviesfromApi.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.addMoviesfromApi();
    // this.setState({ movies: movieAPI.getMovie() });
  }

  async addMoviesfromApi() {
    const moviesAPI = await movieAPI.getMovies();
    const arraymovies = await moviesAPI;
    this.setState(() => ({
      movies: [...arraymovies],
    }));
    this.setState({ loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {(loading)
          ? <Loading />
          : <Home movies={ movies } />}
      </div>
    );
  }
}

export default MovieList;
