import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchReq = this.fetchReq.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchReq();
  }

  async fetchReq() {
    this.setState({
      loading: true,
    }, async () => {
      const endpoint = await movieAPI.getMovies();
      this.setState({
        loading: false,
        movies: [...endpoint],
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {loading
          ? <Loading />
          : movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />
          ))}
      </div>
    );
  }
}

export default MovieList;
