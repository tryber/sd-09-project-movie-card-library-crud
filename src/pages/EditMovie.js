import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { getMovie, updateMovie } from '../services/movieAPI';
import { MovieForm, Loading } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      movie: [],
      isLoading: false,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }
  handleSubmit(updatedMovie) {
    this.setState({ shouldRedirect: true },
      async () => {
        await updateMovie(updatedMovie);
      });
  }
  fetchMovie() {
    const { id } = this.props.match.params;
    this.setState({ isLoading: true },
      async () => {
        const movieGet = await getMovie(id);
        this.setState({ movie: movieGet, isLoading: false });
      });
  }
  render() {
    const { shouldRedirect, movie, isLoading } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default withRouter(EditMovie);

EditMovie.propTypes = {
  match: PropTypes.objectOf(),
  params: PropTypes.objectOf(),
  id: PropTypes.number,
}.isRequired;
