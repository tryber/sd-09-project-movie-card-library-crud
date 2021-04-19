import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card-container">
        <span className="movie-card">
          <img src={ movie.imagePath } alt="movie" className="movie-card-image" />
          <h1>{ movie.title }</h1>
          <p>{ movie.storyline }</p>
          <Link to={ `/movies/${movie.id}` } id={ movie.id }>VER DETALHES</Link>
        </span>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
