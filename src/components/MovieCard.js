import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;

    return (
      <div data-testid="movie-card" className="movie-card">
        <img alt="Movie carde" src={ imagePath } />
        <div className="movie-card-content">
          <p className="title-movie-card">{ title }</p>
          <p className="storyline-movie-card">{ storyline }</p>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.object).isRequired,
};
