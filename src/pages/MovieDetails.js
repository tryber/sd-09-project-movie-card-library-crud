import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchMovie = this.fetchMovie.bind(this);
    this.disableLoadingMessage = this.disableLoadingMessage.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movie: {},
      loading: 'loading',
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id).then((data) => {
      this.setState({
        movie: data,
        loading: 'loaded',
      });
    });
  }

  fetchMovie(movie) {
    this.setState({ movie });
  }

  deleteMovie() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.deleteMovie(id).then(() => (
      this.setState({
        shouldRedirect: true,
      })
    ));
  }

  render() {
    const { movie, loading, shouldRedirect } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading === 'loading') return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link onClick={ this.deleteMovie } to="/">DELETAR</Link>
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default MovieDetails;
