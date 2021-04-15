import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import MovieForm from '../components/MovieForm';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    // const { movie } = this.props;
    movieAPI.createMovie(newMovie);
    // console.log(newMovie);
    // return (<Redirect to="/" />);
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default NewMovie;
