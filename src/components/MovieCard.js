import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath } = movie;
    const link = `movies/${id}`;

    return (
      <div data-testid="movie-card">
        <h3>{ title }</h3>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ storyline }</p>
        <Link to={ link }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
