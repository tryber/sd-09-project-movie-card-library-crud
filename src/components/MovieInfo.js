import React, { Component } from 'react';
import { shape, number, string, oneOfType } from 'prop-types';

export default class MovieInfo extends Component {
  render() {
    const { info } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle } = info;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
      </div>
    );
  }
}

MovieInfo.propTypes = {
  info: shape({
    title: string.isRequired,
    subtitle: string.isRequired,
    storyline: string.isRequired,
    genre: string.isRequired,
    rating: oneOfType([string, number]).isRequired,
    imagePath: string.isRequired,
  }).isRequired,
};
