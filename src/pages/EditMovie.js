import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fillMovieInfo = this.fillMovieInfo.bind(this);
  }

  componentDidMount() {
    this.fillMovieInfo();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
  }

  async fillMovieInfo() {
    const { match: { params: { id } } } = this.props;
    const editingMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: editingMovie,
      status: {},
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
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

export default EditMovie;
