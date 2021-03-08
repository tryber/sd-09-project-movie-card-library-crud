import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{ movie.title }</h1>
        <img src={ movie.imagePath } alt={ movie.title } />
        <p>{movie.storyline}</p>
        <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    imagePath: propTypes.string,
    storyline: propTypes.string,
  }),
}.isRequired;

export default MovieCard;
