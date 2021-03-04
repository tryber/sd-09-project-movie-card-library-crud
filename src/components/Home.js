import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

export default Home;
