import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card" className="movieCard">
        <h2>{ title }</h2>
        <img src={ imagePath } alt={ `imagem ${title}` } />
        <p>{ storyline }</p>
        <div><Link to={ `/movies/${id}` }>VER DETALHES</Link></div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
