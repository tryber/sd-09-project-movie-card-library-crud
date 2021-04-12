import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import MovieForm from '../components/MovieForm';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    const { movie } = this.props;
    movieAPI.createMovie(movie);
    return (<Redirect to="/" />);
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ () => this.handleSubmit } />
      </div>
    );
  }
}

NewMovie.propTypes = {
  movie: PropTypes.objectOf({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }),
};

NewMovie.defaultProps = {
  movie: 'Object not received',
};

export default NewMovie;
