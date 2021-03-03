import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ `Cover ${title}` } />
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
