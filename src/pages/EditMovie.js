import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
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
    const { params } = match;
    const { id } = params;
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
      // Se o Loading for verdadeiro renderiza loading, senão, renderiza o form
      <div data-testid="edit-movie">
        {loading
          ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
        {shouldRedirect && <Redirect to="/" />}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

// Usei o repositóio do colega Enio Nicael para me ajudar a estruturar a lógica

export default EditMovie;
