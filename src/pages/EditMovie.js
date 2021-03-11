import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: '',
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchEditMovie = this.fetchEditMovie.bind(this);
  }

  componentDidMount() {
    this.fetchEditMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fetchEditMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const response = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie: response,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading === true) {
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
  match: PropTypes.string,
  params: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default EditMovie;
