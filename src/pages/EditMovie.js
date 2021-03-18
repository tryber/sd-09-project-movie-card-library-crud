import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import '../styles/Pages/EditMovie.css';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const movie = await movieAPI.getMovie(match.params.id);
    this.getMovie(movie);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  getMovie(movie) {
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { shouldRedirect, loading, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="edit-movie-form-container" data-testid="edit-movie">
        { (loading) ? <Loading /> : (
          <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        )}
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
