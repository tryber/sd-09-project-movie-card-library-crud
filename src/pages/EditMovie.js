import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import { updateMovie, getMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    getMovie(params.id).then((res) => {
      console.log(res);
      this.setState({
        movie: res,
        status: 'loaded',
      });
    });
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
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
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
