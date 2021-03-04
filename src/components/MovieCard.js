import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, imagePath, storyline, subtitle, title } } = this.props;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
          <div className="movie-card-rating">
            <Link to={ `movies/${id}` }>VER DETALHES</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
