import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {

  render() {
    const { movie } = this.props;
    const { id, imagePath, title, storyline } = movie;
    return (
      <div data-testid="movie-card" name={ id }>
        <img src={ imagePath } alt="Poster do filme" />
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
