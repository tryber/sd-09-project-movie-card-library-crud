import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redir: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createMov = this.createMov.bind(this);
  }

  handleSubmit(newMovie) {
    this.createMov(newMovie);
  }

  async createMov(newMov) {
    const { createMovie } = movieAPI;
    try {
      await createMovie(newMov);
      this.setState({ redir: true });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { redir } = this.state;
    if (redir) {
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
