import React from 'react';
import { number, string, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{ title }</h4>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <div className="movie-card-rating">
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
    imagePath: string,
  }).isRequired,
};

export default MovieCard;
