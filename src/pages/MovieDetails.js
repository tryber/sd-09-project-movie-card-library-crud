import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import CardDetails from '../components/CardDetails';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      redirect: '',
      idMovie: '',
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.getMovie(id).then((response) => this.setState({
      movie: response,
      idMovie: id,
    }));
  }

  deleteMovie() {
    const { idMovie } = this.state;
    movieAPI.deleteMovie(idMovie);
    this.setState({ redirect: 'ok' });
  }

  render() {
    const { movie, redirect, idMovie } = this.state;
    const { title, imagePath } = movie;
    if (title === undefined) return <Loading />;

    if (redirect === 'ok') return <Redirect />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <CardDetails movie={ movie } />
        <Link to={ `/movies/${idMovie}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.number),
  }).isRequired,
};

export default MovieDetails;
