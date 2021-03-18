import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { shape, number } from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then(
      (film) => this.setState({ movie: film, status: 'Ok' }),
    );
  }
  // updatedMovie = estado atualizado(obj)

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(
      () => this.setState({ shouldRedirect: true }),
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
  match: shape({
    params: shape({
      id: number,
    }),
  }).isRequired,
};

export default EditMovie;
