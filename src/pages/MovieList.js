import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      key: true,
    };

    this.getMovieObjects = this.getMovieObjects.bind(this);
  }

  componentDidMount() {
    this.getMovieObjects();
  }

  async getMovieObjects() {
    const { location: { state, index } } = this.props;
    const data = await movieAPI.getMovies();
    data[index] = { ...data[index], ...state };
    this.setState({
      movies: data,
      key: false,
    });
  }

  render() {
    const { movies, key } = this.state;
    return (
      <div data-testid="movie-list">
        { key
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieList;
