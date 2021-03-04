import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, imagePath, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h2>{title}</h2>
        <p>{storyline}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
