import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, storyline, title, id } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: {},
  image: PropTypes.string,
  title: PropTypes.string,
  storyline: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default MovieCard;
