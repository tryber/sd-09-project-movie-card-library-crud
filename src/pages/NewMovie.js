import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import MovieList from './MovieList';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoudredirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    this.setState(
      {
        shoudredirect: false,
      },
      async () => {
        await movieAPI.createMovie(newMovie);
        this.setState({
          shoudredirect: true,
        });
      },
    );
  }

  render() {
    const { shoudredirect } = this.state;
    if (shoudredirect) {
      return (
        <div>
          <Redirect to="/" />
          <Route path="/" component={ MovieList } />
        </div>
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
