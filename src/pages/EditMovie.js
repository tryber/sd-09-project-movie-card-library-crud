import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.addMoviesfromApi();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async addMoviesfromApi() {
    const { match } = this.props;
    const { id } = match.params;
    const selectedMovie = await movieAPI.getMovie(id);
    this.setState({ movie: selectedMovie });
    this.setState({ status: 'unloading' });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect exact to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
