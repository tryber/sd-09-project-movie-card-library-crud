import React, { Component } from 'react';
import PropTypes from 'prop-types';
import movies from '../services/movieData';

// import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    console.log(id);
    const { movie } = this.props;
    const { storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: {},
  image: PropTypes.string,
  title: PropTypes.string,
  storyline: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default MovieDetails;
