import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath } } = this.props;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={ imagePath } />
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
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
  }).isRequired,
};

export default MovieCard;
