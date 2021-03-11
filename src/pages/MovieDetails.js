import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import Card from '../components/Card';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      id: 0,
      loading: true,
    };
  }

  componentDidMount() {
    const { getMovie } = movieAPI;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    getMovie(id).then((movie) => this.setState(() => (
      {
        movie,
        id,
        loading: false,
      }
    )));
  }

  render() {
    const { movie, id, loading } = this.state;
    const movieDetails = (
      <div>
        <Card movie={ movie } />
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
    return (
      <div className="movie-card" data-testid="movie-details">
        {loading ? <Loading /> : movieDetails}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
