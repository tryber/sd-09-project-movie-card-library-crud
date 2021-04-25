import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { newMovie: false };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({ newMovie: true });
  }

  updateState(field, newValue) {
    this.setState({ [field]: newValue });
  }

  render() {
    const { newMovie } = this.state;
    if (newMovie) {
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
