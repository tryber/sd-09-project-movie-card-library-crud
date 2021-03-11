import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movieInfo = await movieAPI.getMovie(id);
    this.setState({ movie: movieInfo, status: 'ok' });
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
        {console.log(movie)}
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  id: PropTypes.number.isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default EditMovie;
