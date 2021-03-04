import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class movieCardDetails extends Component {
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
        <button type="submit" onClick={ () => onSubmit(id) }><Link exact to="/">DELETAR</Link></button>
      </div>
    );
  }
}

export default movieCardDetails;
