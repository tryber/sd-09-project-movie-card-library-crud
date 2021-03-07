import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldRedirect: false, status: 'loading', movie: {},

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setMovieState = this.setMovieState.bind(this);
  }

  componentDidMount() {
    this.setMovieState();
  }

  handleSubmit(updatedMovie) {
    this.setState({ status: 'loading' },
      async () => { await movieAPI.updateMovie(updatedMovie); });
    this.setState({ shouldRedirect: true });
  }

  // pegar o id do filme, buscar o filme na lista, colocar no formulário as informações do filme, quando clicar tem que pegar os valores do formulario e atualizar o estado, colocar os novos dados na requisção da api e ir para a página inicial

  async setMovieState() {
    const { match: { params: { id } } } = this.props;
    const movieObject = await movieAPI.getMovie(id);
    this.setState({
      movie: movieObject, status: '',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
