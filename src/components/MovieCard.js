import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, subtitle, imagePath, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <div className="MovieBanner">
          <img src={ imagePath } alt={ title } />
          <h2>{ title }</h2>
        </div>
        <div className="movieCardBody">
          <h3>{ subtitle }</h3>
          <p>{ storyline }</p>
        </div>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,

  }).isRequired,
};

export default MovieCard;
