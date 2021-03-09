import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
// import movies from '../services/movieData';
// import { BrowserRouter as Router } from 'react-router-dom';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.renderMovies = this.renderMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const item = await movieAPI.getMovies();
    // console.log(item[0]);
    this.setState({
      movies: item,
      loading: false,
    });
  }

  renderMovies() {
    const { movies: movieList } = this.state;
    return (movieList.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="movie-list">
        MovieList Rendered
        {loading ? <Loading /> : this.renderMovies() }
      </div>
    );
  }
}

// MovieList.propTypes = {
//   movie: PropTypes.string.isRequired,
// };

export default MovieList;
