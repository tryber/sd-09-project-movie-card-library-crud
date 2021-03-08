import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      id,
      title,
      // subtitle,
      // rating,
      storyline,
      // imagePath,
      // bookmarked,
      // genre
    } = movie;
    return (
      <div data-testid="movie-card">
        <p>{title}</p>
        <p>{storyline}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    // subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    // rating: PropTypes.number.isRequired,
    // imagePath: PropTypes.string.isRequired,
    // bookmarked: PropTypes.bool.isRequired,
    // genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
