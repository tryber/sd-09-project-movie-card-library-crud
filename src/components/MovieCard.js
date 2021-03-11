import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }> VER DETALHES </Link>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    storyline: propTypes.string,
    id: propTypes.string,
  }),
}.isRequired;

export default MovieCard;
