import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating, genre, id } = movie;
    return (
      <div data-testid="movie-card">
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <p>{storyline}</p>
        <p>{genre}</p>
        <p>{rating}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

const { string, number } = PropTypes;
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: string,
    subtitle: string,
    imagePath: string,
    storyline: string,
    genre: string,
    rating: number,
    id: number,
  }),
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    title: 'Sem título',
    subtitle: 'Sem subtítulo',
    imagePath: 'Sem imagem',
    storyline: 'Sem resumo',
    genre: 'Sem gênero',
    rating: 'Sem notas',
    id: '/404',
  }),
};

export default MovieCard;
