import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: '',
        subtitle: '',
        storyline: '',
        rating: 0,
        imagePath: '',
        genre: 'action',
      },
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(() => {
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  render() {
    const { shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
