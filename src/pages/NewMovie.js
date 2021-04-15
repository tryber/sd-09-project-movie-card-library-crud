import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      statusRedirect: false,
    };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({ statusRedirect: true });
  }

  render() {
    const { statusRedirect } = this.state;
    if (statusRedirect) {
      return <Redirect exact to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
