import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goToHome: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) { // newMovie colocar como parametro da func
    movieAPI.createMovie(newMovie);
    this.setState({ goToHome: true });
  }

  render() {
    const { goToHome } = this.state;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
        {goToHome && <Redirect to="/" />}
      </div>
    );
  }
}
export default NewMovie;
