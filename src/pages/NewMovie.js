import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
// eslint-disable-next-line no-unused-vars
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  handleSubmit(newMovie) {
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
