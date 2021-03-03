import React, { Component } from 'react';
import PropTypes from 'prop-types';


// import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { storyline, imagePath, genre, rating, subtitle } = this.props;
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

MovieDetails.propTypes = ({
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.number,
  subtitle: PropTypes.string,
}).isRequired;

export default MovieDetails;
