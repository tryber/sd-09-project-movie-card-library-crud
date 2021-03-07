import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  async handleSubmit(newMovie) {
    const { createMovie } = movieAPI;
    try {
      await createMovie(newMovie);
      this.setState({ shouldRedirect: true });
    } catch (error) {
      console.log(error);
    }
  }

  async fetchData(movie) {
    const { createMovie } = movieAPI;
    const data = await createMovie(movie);
    console.log(data);
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
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
