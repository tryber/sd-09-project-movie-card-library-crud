import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// conteudo do render e suas devidas prop-types foram copiadas do meu PR referente ao projeto do bloco 11
class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, id, imagePath } } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
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
