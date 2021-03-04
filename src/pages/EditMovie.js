import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import Proptypes from 'prop-types';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        genre: '',
        rating: 0,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    await updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fetchMovie() {
    const { getMovie } = movieAPI;
    const { match: { params } } = this.props;
    const { id } = params;
    const selectedMovie = await getMovie(id);
    this.setState({
      movie: selectedMovie,
      status: 'ready',
    });
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
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
