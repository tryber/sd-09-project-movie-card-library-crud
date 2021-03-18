import React from 'react';
import '../styles/Components/MovieCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, storyline, id } = movie;
    const imgBackgroung = {
      background: `url(${imagePath})`, backgroundSize: '350px 200px',
    };
    return (
      <div className="movie-container" data-testid="movie-card">
        <div style={ imgBackgroung }>
          <span>{ title }</span>
        </div>
        <div>
          <span>{ storyline }</span>
        </div>
        <div>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
