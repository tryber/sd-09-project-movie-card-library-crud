import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, imagePath, storyline, title } = movie;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="Imagem do Filme" />
        <section>
          <h4>{ title }</h4>
          <p>{ storyline }</p>
        </section>
        <Link to={ { pathname: `/movies/${id}` } }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
