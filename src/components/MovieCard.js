import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, imagePath, rating, storyline, subtitle, title } = movie;
    return (
      <div data-testid="movie-card">
        {/* <img src={ imagePath } alt="Imagem do Filme" /> */}
        <section>
          <h4>{ title }</h4>
          {/* <h5>{ subtitle }</h5> */}
          <p>{ storyline }</p>
        </section>
        {/* <div>{ rating }</div> */}
        <Link to={ `/movies/${id}` }> VER DETALHES </Link>
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
