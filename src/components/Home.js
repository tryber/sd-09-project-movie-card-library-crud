import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class Home extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <button type="button">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </button>
        <div className="movieListContainer">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default Home;
