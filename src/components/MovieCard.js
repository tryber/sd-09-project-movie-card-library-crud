import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, imagePath, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h2>{title}</h2>
        <p>{storyline}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    imagePath: propTypes.string,
    storyline: propTypes.string,
  }).isRequired,

};
