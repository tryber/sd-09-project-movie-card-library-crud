import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id, imagePath } } = this.props;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="capa" />
        <h4>{title}</h4>
        <h5>{storyline}</h5>
        <Link to={ `movies/${id}` } id={ id }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
