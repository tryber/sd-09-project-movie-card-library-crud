import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading, MovieForm } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      loading: true,
      movie: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.listMovies = this.listMovies.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.listMovies(id);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async listMovies(id) {
    this.setState(
      { loading: true },
      async () => {
        const movieC = await movieAPI.getMovie(id);
        this.setState({ movie: movieC, loading: false });
      },
    );
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;

    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (loading) {
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
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
