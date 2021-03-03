import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating, id } } = this.props;
    const movieId = `movies/${id}`;
    return (
      <div>
        <img src={ imagePath } alt="Movie Cover" />
        <div>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
        </div>
        <div>
          <Link to={ movieId }>VER DETALHES</Link>
          <span>{rating}</span>
        </div>
      </div>
    );
  }
}

export default MovieCard;
