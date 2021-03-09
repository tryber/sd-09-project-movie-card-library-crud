import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: undefined,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadingMovie = this.loadingMovie.bind(this);
  }

  componentDidMount() {
    this.loadingMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async loadingMovie() {
    this.setState(
      { status: 'loading' },
      async () => {
        const { match: { params: { id } } } = this.props;
        const requestMovie = await movieAPI.getMovie(id);
        this.setState({
          movie: requestMovie,
          status: 'loaded',
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    if (status === 'loading') return <Loading />;

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
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
