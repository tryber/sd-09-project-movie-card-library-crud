import React, { Component } from 'react';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading'
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      status: 'loading',
      shouldRedirect: false,
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  async fetchMovie() {
    const { match } = this.props
    const movie = await movieAPI.getMovie(match.params.id)

    this.setState({movie, status:'ok'})
  }

  componentDidMount() {
    this.fetchMovie()

    console.log(this.props.match.params)
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
    this.setState({ shouldRedirect: true })
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />
    }

    if (status === 'loading') {
      return <Loading />
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
