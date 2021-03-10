import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import MovieDetails from '../pages/MovieDetails';

class MovieCard extends React.Component {

  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;
    return (
      <div data-testid="movie-card">
        Movie Card
        <h4>{ title }</h4>
        <h5>{ storyline }</h5>
        <img src={ imagePath } alt="banner do filme" />
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
