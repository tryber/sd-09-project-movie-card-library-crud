import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: '',

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieToEdit = this.getMovieToEdit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    this.getMovieToEdit(match.params.id);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async getMovieToEdit(movieId) {
    const movieToEdit = await movieAPI.getMovie(movieId);
    this.setState({
      status: 'loaded',
      movie: movieToEdit,
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired }).isRequired,
};

export default EditMovie;
