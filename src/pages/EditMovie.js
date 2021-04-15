import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.movieRequisitionToEdit = this.movieRequisitionToEdit.bind(this);
  }

  async componentDidMount() {
    await this.movieRequisitionToEdit();
  }

  handleSubmit(updatedMovie) {
    // const { movie } = this.state;
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async movieRequisitionToEdit() {
    const { match: { params: { id } } } = this.props;
    // movieAPI.getMovies().then((resultGetMovie) => console.log(resultGetMovie));
    const resultGetMovie = await movieAPI.getMovie(id);
    this.setState({ movie: { ...resultGetMovie }, status: '', shouldRedirect: false });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
      // render Loading
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf,
};

EditMovie.defaultProps = {
  match: 'Object not received',
};

export default EditMovie;
