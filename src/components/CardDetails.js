import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardDetails extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h2>{movie.title}</h2>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
      </div>
    );
  }
}

CardDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default CardDetails;
