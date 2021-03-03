import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, id, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="Movie Cover" />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-storyline">{storyline}</h5>
        <p className="movie-card-id">{ id }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string,
    storyline: Proptypes.string,
    imagePath: Proptypes.string,
    id: Proptypes.number,
  }).isRequired,
};

export default MovieCard;
