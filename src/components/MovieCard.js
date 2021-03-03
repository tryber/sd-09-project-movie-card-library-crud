import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <div data-testid="movie-card" className="card-base">
        <img src={ movie.imagePath } alt="card-img" className="card-image" />
        <h1 className="card-title">{movie.title}</h1>
        <p className="card-subtitle">{movie.storyline}</p>
        <hr />
        <div className="card-link">
          <Link className="card-link-txt" to={ `/movies/${movie.id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.object }.isRequired;

export default MovieCard;
