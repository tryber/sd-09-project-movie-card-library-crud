import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating, genre } = movie;
    return (
      <div data-testid="movie-card">
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <p>{storyline}</p>
        <p>{genre}</p>
        <p>{rating}</p>
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
  }),
};

export default MovieCard;
