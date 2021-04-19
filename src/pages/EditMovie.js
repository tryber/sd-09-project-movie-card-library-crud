import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';
import MovieList from './MovieList';
import '../App.css';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMoveEdit = this.handleMoveEdit.bind(this);
  }

  componentDidMount() {
    this.handleMoveEdit();
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  handleMoveEdit() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const resultApi = getMovie(id);
    return resultApi.then((movie) => this
      .setState((previousState) => ({
        ...previousState,
        movie,
        status: '',
      })));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect exact path="/" component={ MovieList } />;
    }

    if (status === 'loading') {
      // render Loading
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
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
