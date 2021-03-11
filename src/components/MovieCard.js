import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="Encarte" />
        <div className="movie-card-body">
          <h1 className="movie-card-title">{ title }</h1>
          <h2 className="movie-card-subtitle">{ subtitle }</h2>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.string,
  }).isRequired
};

export default MovieCard;
