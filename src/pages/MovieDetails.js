import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';
import DetailsCard from '../components/DetailsCard';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.hanleMovie = this.hanleMovie.bind(this);
    this.requestToDelete = this.requestToDelete.bind(this);
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

  requestToDelete() {
    const { movie } = this.state;
    const { id } = movie;
    console.log(id);
    deleteMovie(id);
  }

  render() {
    const { movie } = this.state;
    return (
      <div data-testid="movie-details" className="detail-container">
        { movie.length !== 0 ? <DetailsCard movie={ movie } /> : <Loading />}
        <button type="submit" onClick={ this.requestToDelete }>
          <Link to="/">DELETAR</Link>
        </button>
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
