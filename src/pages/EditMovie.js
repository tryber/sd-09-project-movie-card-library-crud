import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 'loading' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    try {
      const response = await movieAPI.updateMovie(updatedMovie);
      this.setState({
        movie: response,
        shouldRedirect: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    try {
      const response = await movieAPI.getMovie(id);
      this.setState({
        movie: response,
        status: 'done',
      });
    } catch (error) {
      console.log(error);
    }
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
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
  match: PropTypes.objectOf().isRequired,
  id: PropTypes.number.isRequired,
};

export default EditMovie;
