import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {

  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;

    return (
      <div data-testid="movie-card">
        <img alt="Movie carde" src={ imagePath } />
        <p>{ title }</p>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.object).isRequired,
};
