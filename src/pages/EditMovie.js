import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props); this.state = { loading: true, movie: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((success) => this.setState({ movie: success }))
      .then(() => this.setState({ loading: false }));
  }

  handleSubmit(updatedMovie) {
    // editar abaixo (não veio padrão)
    return (updatedMovie, movieAPI);
  }

  render() {
    const { status, shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }

    return loading ? <Loading /> : (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  movie: PropTypes.shape(),
}.isRequired;

export default EditMovie;
