import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading : true
    };
  }

  UNSAFE_componentWillMount() {
    movieAPI.getMovies().then(res => {
      this.setState({movies : res, isLoading : false});
    });    
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if(this.state.isLoading)
      return <Loading />
    
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
