import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      movie: [],
      redirect: false,
    };
  }

  async handleSubmit(newMovie) {
    const createNewMovie = await movieAPI.createMovie(newMovie);
    this.setState({
      movie: [...createNewMovie],
      redirect: true,
    });
  }

  render() {
    const { movie, redirect } = this.state;
    if (redirect) {
      return (
        <Redirect
          to={ {
            pathname: '/',
            newMovie: [...movie],
          } }
        />
      );
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
