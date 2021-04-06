import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      shouldRedirect: false,
      loading: false,
    };
  }

  async handleSubmit(newMovie) {
    this.setState({
      loading: true,
    });
    await movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
      loading: false,
    });
  }

  render() {
    const { shouldRedirect, loading } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        {loading === true
          ? <Loading />
          : <MovieForm onSubmit={ this.handleSubmit } />}
      </div>
    );
  }
}
export default NewMovie;
