import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

import PropTypes from 'prop-types';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { id } = match.params;
    this.state = {
      movie: {},
      shouldRedirect: false,
      status: true,
      movieId: id,

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    this.setState(
      { shouldRedirect: false },

      async () => {
        movieAPI.updateMovie(updatedMovie);
        this.setState({
          shouldRedirect: true,

        });
      },
    );
  }

  async fetchMovie() {
    const { movieId } = this.state;
    this.setState(
      { status: true },

      async () => {
        const requestMovie = await movieAPI.getMovie(movieId);
        this.setState({
          movie: requestMovie,
          status: false,

        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        { status ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } /> }
      </div>
    );
  }
}

EditMovie.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,

  }).isRequired,

}.isRequired;

export default EditMovie;
