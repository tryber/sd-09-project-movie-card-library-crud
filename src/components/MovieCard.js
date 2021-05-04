import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { imagePath, storyline, title, subtitle },
      index,
    } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ imagePath } className="card-image" alt="poster do filme" />
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <button type="button">
          <Link to={ `/movies/${index + 1}` }>
            VER DETALHES
          </Link>
        </button>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object,
  index: PropTypes.string,
}.isRequired;

export default MovieCard;
