import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
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
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    return movieAPI.getMovie(id)
      .then((response) => this
        .setState((previousState) => ({
          ...previousState,
          movie: response,
          status: '',
        })));
  }

  handleSubmit(updatedMovie) {
    this.setState((previousState) => ({
      ...previousState,
      status: 'loading',
      shouldRedirect: true,
    }));
    return movieAPI.updateMovie(updatedMovie);
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
