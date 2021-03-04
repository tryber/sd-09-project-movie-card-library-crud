import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const requestMovie = await movieAPI.getMovie(id);
    this.setState({ status: 'ready', movie: requestMovie });
  } 

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => this.setState({ shouldRedirect: true }));
    
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return (<Redirect to="/" />)

    if (status === 'loading') return (<Loading />)

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
