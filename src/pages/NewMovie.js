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
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  shouldRedirect() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
  }

  render() {
    return (
      <div data-testid="new-movie">
        {this.shouldRedirect()}
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
