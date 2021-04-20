import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMoviebyId = this.getMoviebyId.bind(this);
  }

  componentDidMount() {
    this.getMoviebyId();
  }

  handleSubmit(updatedMovie) {
    const { movie } = this.state;
    console.log(movie);
    this.setState({
      movie: { ...movie, ...updatedMovie },
      shouldRedirect: true,
    });
  }

  async getMoviebyId() {
    const { match: { params } } = this.props;
    const data = await movieAPI.getMovie(params.id);
    this.setState({
      status: 'loaded',
      movie: data,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    const { match: { params } } = this.props;
    if (shouldRedirect) {
      return (<Redirect
        to={ {
          pathname: '/',
          state: movie,
          index: params.id - 1,
        } }
      />);
    }
    if (status === 'loading') return <Loading />;
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
