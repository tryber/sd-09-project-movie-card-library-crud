import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(newMovie) {
  // }

  render() {
    return (
      <BrowserRouter>
        <div data-testid="new-movie">
          <h1> New Movie </h1>
          <MovieForm onSubmit={ this.handleSubmit } />
        </div>
      </BrowserRouter>
    );
  }
}
export default NewMovie;
