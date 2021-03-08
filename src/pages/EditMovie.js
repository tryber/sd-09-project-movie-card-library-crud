import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import { MovieForm } from '../components';


class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
      movieId: id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie(this.state.movieId);
  }

  async fetchMovie(id) {
    this.setState({
      movie: await movieAPI.getMovie(id),
      status: '',
    });
  }

  async handleSubmit(updatedMovie) {
    this.setState({
      shouldRedirect: true,
    });
    await movieAPI.updateMovie(updatedMovie);
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
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
