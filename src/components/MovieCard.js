import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { image, title, storyline, id } = movie;
    console.log(`card ${id}`);
    return (
      <div data-testid="movie-card">
        Movie Card
        <img src={ image } alt={ title } />
        <p>
          { title }
        </p>
        <p>{ storyline }</p>
        <p><Link to={ `/movies/${id}` }>VER DETALHES</Link></p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: {},
  image: PropTypes.string,
  title: PropTypes.string,
  storyline: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default MovieCard;
