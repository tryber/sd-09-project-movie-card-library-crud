import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';

class DetailsCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="detail-card">
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } className="detail-image" />
        <div className="detail-inf-box">
          <p>{ `Title: ${movie.title}` }</p>
          <p>{ `Subtitle: ${movie.subtitle}` }</p>
          <p>{ `Storyline: ${movie.storyline}` }</p>
          <p>{ `Genre: ${movie.genre}` }</p>
          <p>{ `Rating: ${movie.rating}` }</p>
          <Link to={ `/movies/${movie.id}/edit` } id={ movie.id }>
            <button type="button">EDITAR</button>
          </Link>
          <Link to="/"><button type="submit">VOLTAR</button></Link>
        </div>
      </section>
    );
  }
}

DetailsCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default DetailsCard;
