import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
        <p>
          { movie.title }
        </p>
        <p>
          { movie.storyline }
        </p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf({
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
