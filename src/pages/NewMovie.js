import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { hasFetched: false };
  }

  async handleSubmit(newMovie) {
    try {
      await movieAPI.createMovie(newMovie);
      this.setState({ hasFetched: true });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { hasFetched } = this.state;
    if (hasFetched) return <Redirect to="/" />;

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
