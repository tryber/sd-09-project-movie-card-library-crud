import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
// import * as movieAPI from '../services/movieAPI';

import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    createMovie(newMovie);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    if (redirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
