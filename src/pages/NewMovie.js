import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    const movieNew = await movieAPI.createMovie(newMovie);
    const movieAdded = await movieNew;
    console.log(movieAdded);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    return (
      !redirect ? (
        <div data-testid="new-movie">
          <MovieForm onSubmit={ this.handleSubmit } />
        </div>
      ) : <Redirect to="/" />

    );
  }
}
export default NewMovie;
