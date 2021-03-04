import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.loadingList = this.loadingList.bind(this);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.loadingList();
    this.fetchMovies();
  }

  async fetchMovies() {
    const data = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: data,
    });
  }

  loadingList() {
    const { movies } = this.state;
    const { loading } = this.state;
    if (loading) {
      return (<Loading />);
    }
    return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  render() {
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {this.loadingList()}
        <br />
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
