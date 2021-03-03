import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
        <img src={ imagePath } alt='Movie Cover' />
        <p>{ storyline }</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
