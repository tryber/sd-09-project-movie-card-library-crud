import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      id,
      imagePath,
      storyline,
      title,
    } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img alt="Movie Cover" src={ imagePath } width="400px" />
        <p>{title}</p>
        <p>{storyline}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    title: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: undefined,
};

export default MovieCard;
