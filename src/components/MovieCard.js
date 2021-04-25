import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <h3>{title}</h3>
        <h3>{storyline}</h3>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  movie: PropTypes.string.isRequired,
};

export default MovieCard;
