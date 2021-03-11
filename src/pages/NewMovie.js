import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { MovieForm } from '../components';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { redirect: false };
  }

  handleSubmit(newMovie) {
    createMovie(newMovie);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
