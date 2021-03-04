import React from 'react';
import { string, number, shape, oneOfType } from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, rating, imagePath, storyline } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <Rating rating={ rating } />
          <p className="movie-card-storyline">{storyline}</p>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: shape({
    id: number,
    title: string,
    subtitle: string,
    storyline: string,
    rating: oneOfType([string, number]),
    imagePath: string,
  }).isRequired,
};

export default MovieCard;
