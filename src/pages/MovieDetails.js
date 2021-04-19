import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';
import DetailsCard from '../components/DetailsCard';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.hanleMovie = this.hanleMovie.bind(this);
    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    this.hanleMovie();
  }

  hanleMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const currentMovie = getMovie(id);
    currentMovie.then((movie) => {
      this.setState({
        movie,
      });
    });
  }

  render() {
    const { movie } = this.state;
    return (
      <div data-testid="movie-details" className="detail-container">
        { movie.length !== 0 ? <DetailsCard movie={ movie } /> : <Loading />}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
