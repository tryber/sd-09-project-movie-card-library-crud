import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieRender from '../components/MovieRender';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
    };

    this.loadMovie = this.loadMovie.bind(this);
  }

  componentDidMount() {
    this.loadMovie();
  }

  async loadMovie() {
    const { match: { params: { id } } } = this.props;
    const response = await movieAPI.getMovie(id);

    this.setState({
      movie: response,
    });
  }

  render() {
    const { movie } = this.state;

    return (
      <div data-testid="movie-details">
        { movie === '' ? <Loading /> : <MovieRender movie={ movie } />}
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
