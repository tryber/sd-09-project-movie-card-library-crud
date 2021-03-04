import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.movieGenerate = this.movieGenerate.bind(this);
  }

  handleSubmit(newMovie) {
    this.movieGenerate(newMovie);
  }

  async movieGenerate(newMovieGenerate) {
    const {createMovie} = movieAPI;
    try {
      await createMovie(newMovieGenerate);
      this.setState({redirect: true});
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
