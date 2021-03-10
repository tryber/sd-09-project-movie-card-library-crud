import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline } = movie;
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
  movie: PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    subtitle: PropType.string.isRequired,
    storyline: PropType.string.isRequired,
    rating: PropType.number.isRequired,
    imagePath: PropType.string.isRequired,
    bookmarked: PropType.bool.isRequired,
    genre: PropType.string.isRequired,
  }).isRequired,
};

export default MovieCard;
