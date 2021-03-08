import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <h2>{ storyline }</h2>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
