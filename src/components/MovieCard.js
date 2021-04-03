import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <div className="card movie-card">

        <div>
          <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
          <p className="card-title">{ title }</p>
        </div>

        <div className="card-content">
          <p>{ storyline }</p>
        </div>

        <div>
          <Link data-testid={`${ title }Details`} to={`/movies/${ id }`}>Ver detalhes</Link>
        </div>

      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};