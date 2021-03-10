import React, { Component } from 'react';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      shouldRedirect: false,
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getMovie } = movieAPI;
    const { match } = this.props;
    const { id } = match.params;
    getMovie(id).then((movie) => this.setState(() => (
      {
        movie,
        loading: false,
      }
    )));
  }

  handleSubmit(updatedMovie) {
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    return (
      <div data-testid="edit-movie">
        {loading
          ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
      </div>
    );
  }
}

export default EditMovie;
