import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      shouldRedirect: false,
      objNew: {
        title: '',
        subtitle: '',
        storyline: '',
        rating: 0,
        imagePath: '',
        genre: 'action',
      },
    };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { shouldRedirect, objNew } = this.state;

    if (shouldRedirect) return (<Redirect to="/" />);

    return (
      <div data-testid="new-movie">
        <MovieForm movie={ objNew } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default NewMovie;
