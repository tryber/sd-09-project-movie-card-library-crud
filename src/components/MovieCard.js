import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, id, imagePath } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
export default MovieCard;
