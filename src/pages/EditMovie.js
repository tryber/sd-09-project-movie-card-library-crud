import React, { Component } from 'react';
import { shape, number } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

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

  componentDidMount() {
    this.fetchMovieInfo();
  }

  handleFetchError(error) {
    console.error(error);
    // Vou tratar o erro depois que atingir os 100% ^^'
    return { error, message: 'Error fecthing movie info' };
  }

  handleSubmit(updatedMovie) {
    this.setState(
      { loading: true },
      async () => {
        const movie = await movieAPI.updateMovie(updatedMovie)
          .then((res) => res)
          .catch((error) => this.handleFetchError(error));
        return movie.error
          ? this.setState({ movie, loading: false })
          : this.setState({ movie, shouldRedirect: true });
      },
    );
  }

  async fetchMovieInfo() {
    const { match } = this.props;
    const { id } = match.params;
    const movie = await movieAPI.getMovie(id)
      .then((res) => res)
      .catch((error) => this.handleFetchError(error));
    this.setState({ movie, loading: false });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    return (
      loading
        ? <Loading />
        : (
          <div data-testid="edit-movie">
            <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
          </div>
        )
    );
  }
}

EditMovie.propTypes = {
  match: shape({
    params: shape({
      id: number,
    }),
  }).isRequired,
};

export default EditMovie;
