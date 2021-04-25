import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropType from 'prop-types';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    movieAPI.getMovie(id).then((resolve) => {
      this.setState({
        movie: resolve,
        status: 'done',
      });
    });
  }

  handleSubmit(updatedMovie) {
    this.setState({
      shouldRedirect: true,
    });
    movieAPI.updateMovie(updatedMovie);
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
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
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.string,
    }),
  }).isRequired,
};

export default EditMovie;
