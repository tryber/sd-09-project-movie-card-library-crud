import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    /* this.handleSubmit = this.handleSubmit.bind(this); */
    this.fetchDetails = this.fetchDetails.bind(this);
    this.state = {
      movie: [],
      loading: true,
    };
  }

  /* handleSubmit(updatedMovie) {
  } */

  componentDidMount() {
    const { match } = this.props;
    this.fetchDetails(match.params.id);
  }

  async fetchDetails(id) {
    const movieDetails = await movieAPI.getMovie(id);
    this.setState({
      movie: movieDetails,
      loading: false,
    });
  }

  render() {
    const { loading, /* shouldRedirect, */ movie } = this.state;
    if (loading) return <Loading />;
    /* if (shouldRedirect) {
      // Redirect
    } */

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  movie: PropTypes.string,
}.isRequired;

export default EditMovie;
