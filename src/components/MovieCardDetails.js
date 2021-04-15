import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCardDetails extends Component {
  render() {
    const { movie, onSubmit } = this.props;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details" className="movieCardDetails">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ title }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="linksContainer">
          <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
          <button type="button"><Link exact to="/">VOLTAR</Link></button>
        </div>
        <p><Link exact to="/" onClick={ () => onSubmit(id) }>DELETAR</Link></p>
      </div>
    );
  }
}

MovieCardDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieCardDetails;
