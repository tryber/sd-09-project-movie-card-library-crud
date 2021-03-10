import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
    movieAPI.updateMovie(updatedMovie).then((result) => {
      console.log(result);
      this.setState({ shouldRedirect: true });
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    
    return (
      <div data-testid="edit-movie">
        {loading
          ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
        {shouldRedirect && <Redirect to="/" />}
      </div>
    );
  }
}

export default EditMovie;
