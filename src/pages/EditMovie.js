import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.state = {
      id,
      movie: {},
      shouldRedirect: false,
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieFromAPI = this.getMovieFromAPI.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    this.getMovieFromAPI(id);
  }

  shouldComponentUpdate(prevProps, prevState) {
    const movie = this.state;
    if (prevState.movie === movie) {
      return false;
    }
    return true;
  }

  handleSubmit(updatedMovie) {
    this.setState({ shouldRedirect: false },
      async () => {
        movieAPI.updateMovie(updatedMovie);
        this.setState({ shouldRedirect: true });
      });
  }

  getMovieFromAPI(movieId) {
    this.setState(
      { status: 'loading' },
      async () => {
        const movieFromAPI = await movieAPI.getMovie(movieId);
        this.setState({
          status: 'loaded',
          movie: movieFromAPI,
        });
      },
    );
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
  match: PropTypes.shape(
    {
      params: {
        id: PropTypes.string,
      },
    },
  ).isRequired,
};

export default EditMovie;
