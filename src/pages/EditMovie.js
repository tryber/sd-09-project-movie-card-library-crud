import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchReq = this.fetchReq.bind(this);
  }

  componentDidMount() {
    this.fetchReq();
  }

  handleSubmit(updatedMovie) {
    const movie = movieAPI.updateMovie(updatedMovie);
    this.setState({
      status: false,
      shouldRedirect: true,
    });
    return movie;
  }

  async fetchReq() {
    const { match } = this.props;
    const { params } = match;
    this.setState({
      status: true,
    }, async () => {
      const movie = await movieAPI.getMovie(params.id);
      this.setState({
        status: false,
        movie,
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status) {
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

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
