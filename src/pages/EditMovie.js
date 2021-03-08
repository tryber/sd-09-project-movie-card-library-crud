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

  async setMovieState() {
    const { match: { params: { id } } } = this.props;
    const movieObject = await movieAPI.getMovie(id);
    this.setState({
      movie: movieObject, status: '',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    if (status) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  params: PropTypes.objectOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
};
