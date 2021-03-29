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
    };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(() => this.setState({
      shouldRedirect: true,
    }));
  }

  render() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) return (<Redirect to="/" />);

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
  // consultei o repositório do colega Murilo Batista
  // https://github.com/tryber/sd-09-project-movie-card-library-crud/pull/50/files?file-filters%5B%5D=.js
}
export default NewMovie;
