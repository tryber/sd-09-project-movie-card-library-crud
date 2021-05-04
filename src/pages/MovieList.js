import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  // componentDidMount(){
  //   const userData = fetch(movieAPI.getMovies)
  //  .then(response => response.json())
  //  .then(data => console.log(data))
  // }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState({ movies, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}
export default MovieList;
