import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, imagePath, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        {/* <div style={ { backgroundImage: `url(${imagePath})` } }>{title}</div> */}
        <img src={ imagePath } alt={ title } />
        <h3>{title}</h3>
        <p>{storyline}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
