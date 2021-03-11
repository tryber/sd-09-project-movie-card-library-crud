import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import movie from '../services/movieData';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    const { id, title, subtitle, storyline, rating, imagePath, genre } = movie;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="path" />
        <h2>{ title }</h2>
        <h4>{ subtitle }</h4>
        <p>{ storyline }</p>
        <p>{ genre }</p>
        <p>{ rating }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    genre: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
