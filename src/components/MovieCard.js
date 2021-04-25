import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Styles/MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        Movie Card
        <h1 className="card-title">{ title }</h1>
        <img className="card-image" src={ imagePath } alt={ `imagem ${title}` } />
        <p className="card-storyline">{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
