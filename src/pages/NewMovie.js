import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      movie: {
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        gender: undefined,
        rating: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({ shouldRedirect: true });
    return movieAPI.createMovie(newMovie);
  }

  render() {
    const { shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
