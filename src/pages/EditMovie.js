import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.getMovie = this.getMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      movie: {},
      isLoading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async getMovie() {
    this.setState(
      { isLoading: true }, // carregando
      async () => {
        const { match } = this.props;
        try {
          this.setState({
            movie: await movieAPI.getMovie(match.params.id), // buscando os dados
            isLoading: false, // deletando o carregamento
          });
        } catch (error) {
          console.log(error);
        }
      },
    );
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;
    // console.log(this.state);
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
