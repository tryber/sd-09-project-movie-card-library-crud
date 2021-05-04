import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DetailsCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <h1>{ `Title: ${movie.title}` }</h1>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
      </div>
    );
  }
}

DetailsCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.number,
}.isRequired;

export default DetailsCard;
