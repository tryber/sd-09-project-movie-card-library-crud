import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import Card from '../components/Card';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
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
        loading: false,
      }
    )));
  }

  deleteMovieCard(id) {
    const { deleteMovie } = movieAPI;
    deleteMovie(id).then(() => {
      this.setState({ shouldRedirect: true });
    });
  }

  render() {
    const { movie, loading, shouldRedirect } = this.state;
    const movieDetails = (
      <div>
        <Card movie={ movie } />
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.deleteMovieCard(movie.id) }>DELETAR</Link>
      </div>
    );
    return (
      <div className="movie-card" data-testid="movie-details">
        {loading ? <Loading /> : movieDetails}
        {shouldRedirect && <Redirect to="/" />}
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
