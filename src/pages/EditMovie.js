import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(state) {
    super(state);
    this.state = {
      movie: {},
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    await movieAPI.getMovie(match.params.id).then((res) => {
      this.setState({ movie: res, loading: false });
    });
  }

  // handleSubmit(updatedMovie) {
  // }

  render() {
    const { status, shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }

    return loading ? (
      <Loading />
    ) : (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
EditMovie.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string }).isRequired,
  }).isRequired,
};
export default EditMovie;
