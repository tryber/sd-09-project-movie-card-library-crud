import React from 'react';
import { Link } from 'react-router-dom';
import { shape } from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies: { id, imagePath, title, subtitle, storyline } } = this.props;

    return (
      <div data-testid="movie-card">
        <article>
          <img src={ imagePath } alt={ imagePath } />
          <h3>{ title }</h3>
          <h4>{ subtitle }</h4>
          <p>{ storyline }</p>

          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </article>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: shape().isRequired,
};

export default MovieCard;
