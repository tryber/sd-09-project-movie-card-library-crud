/* eslint-disable react/jsx-closing-tag-location */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import '../styles/movieCardDetails.css';
import MovieCardDetails from '../components/MovieCardDetails';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.addMoviesfromApi = this.addMoviesfromApi.bind(this);

    this.state = {
      movie: {},
      loading: true,
      // movieId: 0,
    };
  }

  componentDidMount() {
    this.addMoviesfromApi();
    // this.setState({ movies: movieAPI.getMovie() });
  }

  handleSubmit(id) {
    movieAPI.deleteMovie(id);
  }

  async addMoviesfromApi() {
    const { match } = this.props;
    const { id } = match.params;
    // this.setState({ movieId: id });
    const selectedMovie = await movieAPI.getMovie(id);
    this.setState({ movie: selectedMovie });
    this.setState({ loading: false });
  }

  render() {
    const { movie, loading } = this.state;
    return (
      <div className="detailsContainer">
        {
          (loading)
            ? <Loading />
            : <MovieCardDetails movie={ movie } onSubmit={ this.handleSubmit } />
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
