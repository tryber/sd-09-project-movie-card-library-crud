import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      status: 'loading',
      movie: {},
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id).then((data) => {
      this.setState({
        movie: data,
        status: 'carregado',
      });
    });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  fetchMovie(movie) {
    this.setState({ movie, isLoading: false });
  }

  render() {
    const { status, isLoading, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect path="/" />;
    }

    if (status === isLoading) {
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
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
