import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCardDetails from '../components/MovieCardDetails';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.addMovies = this.addMovies.bind(this);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.addMovies();
  }

  handleSubmit(id) {
    movieAPI.deleteMovie(id);
  }

  async addMovies() {
    const { match } = this.props;
    const { id } = match.params;
    const selectedMovie = await movieAPI.getMovie(id);
    this.setState({ movie: selectedMovie });
    this.setState({ loading: false });
  }

  render() {
    const { movie, loading } = this.state;

    return (
      <div>
        {
          (loading) ? <Loading /> : <MovieCardDetails
            movie={ movie }
            onSubmit={ this.handleSubmit }
          />
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
