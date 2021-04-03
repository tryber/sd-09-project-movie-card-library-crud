import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath: image, title, storyline, id } = movie;
    console.log(image);
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ image } alt={ title } />
        <div className="movie-card-info">
          <p>
            { title }
          </p>
          <p>{ storyline }</p>
          <p><Link className="movie-card-details-link" to={ `/movies/${id}` }>VER DETALHES</Link></p>
        </div>
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
