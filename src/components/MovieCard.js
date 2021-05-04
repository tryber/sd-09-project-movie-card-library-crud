import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render(match) {
    const { movie: { imagePath, id, rating, storyline, title, subtitle }, index } = this.props;
    return (
      <div
        data-testid="movie-card"
        className="movie-card"
      >
        <img src={ imagePath } className="card-image" />
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <Link to={ `/movies/${ index + 1 }` }>
          <a href={ 'http://localhost/movies/' + (index + 1) }>VER DETALHES</a>
        </Link>
      </div>
    );
  }
}

export default MovieCard;
