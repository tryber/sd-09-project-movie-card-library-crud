import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: false,
      movie: [],
      loading: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.moviePromise = this.moviePromise.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.moviePromise(id);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async moviePromise(id) {
    this.setState(
      { loading: true },
      async () => {
        const promiseMovie = await movieAPI.getMovie(id);
        this.setState({ loading: false, movie: promiseMovie });
      },
    );
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) {
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
