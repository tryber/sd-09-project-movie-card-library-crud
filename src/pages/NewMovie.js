import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState(
      { loading: true },
      async () => {
        try {
          const result = await movieAPI.createMovie(newMovie);
          if (result !== 'OK') throw new Error('Could not create movie');
          // this.myAlert('Movie succesfully added!');
          this.setState({ shouldRedirect: true });
        } catch (error) {
          this.setState({ loading: false });
          this.myAlert(error);
        }
      },
    );
  }

  /*
  myAlert(msg) {
    alert(msg);
  }
  */

  render() {
    const { loading, shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    return (
      loading
        ? <Loading />
        : (
          <div data-testid="new-movie">
            <MovieForm onSubmit={ this.handleSubmit } />
          </div>
        )
    );
  }
}
export default NewMovie;
