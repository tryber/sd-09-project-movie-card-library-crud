import React, { Component } from 'react';
import { Redirect } from 'react-router';
import propTypes from 'prop-types';
import { MovieForm } from '../components';
// import * as movieAPI from '../services/movieAPI';
import { updateMovie, getMovie } from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: 'loading',
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    getMovie(params.id).then((data) => {
      this.setState({
        movie: data,
        status: 'charged',
      });
    });
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);
    this.setState({ redirect: true });
  }

  render() {
    const { status, redirect, movie } = this.state;
    if (redirect) {
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
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
