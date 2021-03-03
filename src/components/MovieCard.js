import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string, number } from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: shape({
    title: string,
    storyline: string,
    id: number,
  }).isRequired,
};

export default MovieCard;
