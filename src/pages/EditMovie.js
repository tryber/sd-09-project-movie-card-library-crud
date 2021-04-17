import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { shape, string } from 'prop-types';

import { Loading, MovieForm } from '../components';
import MovieList from './MovieList';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    this.setState(
      {
        shouldRedirect: false,
      },
      async () => {
        await movieAPI.updateMovie(updatedMovie);
        this.setState({
          shouldRedirect: true,
        });
      },
    );
    movieAPI.updateMovie(updatedMovie);
  }

  fetchMovie() {
    const { match } = this.props;
    const { params } = match;
    this.setState(
      {
        status: 'loading',
      },
      async () => {
        const response = await movieAPI.getMovie(params.id);
        this.setState({
          status: 'load',
          movie: response,
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <div>
          <Redirect to="/" />
          <Route path="/" component={ MovieList } />
        </div>
      );
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

EditMovie.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

export default EditMovie;
