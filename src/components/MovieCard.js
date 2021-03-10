import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img
          className="movie-card-image"
          src={ imagePath }
          alt={ `${title} movie poster` }
        />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <p className="movie-card-storyline">{ storyline }</p>
          <Link to={ `movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
