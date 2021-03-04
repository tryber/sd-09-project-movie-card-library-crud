import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
// import { BrowserRouter as Router } from 'react-router-dom';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  // componentWillMount() {
  //   console.log('Carregando...');
  // }

  componentDidMount() {
    movieAPI.getMovies();
    console.log('componentDidMount');
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        MovieList Rendered
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <movieAPI />
      </div>
    );
  }
}

// MovieList.propTypes = {
//   movie: PropTypes.string.isRequired,
// };

export default MovieList;
