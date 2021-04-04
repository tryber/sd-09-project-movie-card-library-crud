import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie, loading: false }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  shouldRedirect() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return (<Redirect to="/" />);
  }

  render() {
    const { loading, movie } = this.state;
    return (
      <div data-testid="edit-movie">
        {this.shouldRedirect()}
        {
          loading
            ? <Loading />
            : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        }
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;

export default EditMovie;
