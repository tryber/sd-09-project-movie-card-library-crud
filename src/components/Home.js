import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import './Styles/Home.css';

class Home extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        <button type="button">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </button>
        <div className="cards-movies">
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
