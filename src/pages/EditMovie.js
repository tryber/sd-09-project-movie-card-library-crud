import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
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
  }

  componentDidMount() {
    this.getMovie();
  }

  async handleSubmit(updatedMovie) {
    const requestMovieAPI = await movieAPI.updateMovie(updatedMovie);
    const movieUpdated = await requestMovieAPI;
    console.log(movieUpdated);
    this.setState({ shouldRedirect: true });
  }

  async getMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const movieToEdit = await movieAPI.getMovie(id);
    this.setState({
      status: 'loaded',
      movie: movieToEdit,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
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
  match: PropTypes.objectOf(Object).isRequired,
  id: PropTypes.number.isRequired,
};

export default EditMovie;
