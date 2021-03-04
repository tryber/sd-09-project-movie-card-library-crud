import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import MovieList from './MovieList';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(updatedMovie) {
    const request = await movieAPI.updateMovie(updatedMovie);

    return (request === 'OK') && this.setState({ shouldRedirect: true });
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);

    this.setState({
      movie,
      loading: false,
    })
  }

  componentDidMount() {
    this.fetchMovie();
  }

  structureEdit(movie) {
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }


  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to='/' component={ MovieList } />;
    }

    return (loading) ? <Loading /> : this.structureEdit(movie);
  }
}

export default EditMovie;
