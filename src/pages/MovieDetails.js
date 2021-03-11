import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.state = {
      id,
      movie: {},
      isLoading: true,
      shouldRedirect: false,
    };
    this.getMovieFromAPI = this.getMovieFromAPI.bind(this);
    this.renderMovieDetails = this.renderMovieDetails.bind(this);
    this.deleteMovieAPI = this.deleteMovieAPI.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    this.getMovieFromAPI(id);
  }

  getMovieFromAPI(movieId) {
    this.setState(
      { isLoading: true },
      async () => {
        const movieFromAPI = await movieAPI.getMovie(movieId);
        this.setState({
          isLoading: false,
          movie: movieFromAPI,
        });
      },
    );
  }

  deleteMovieAPI() {
    const { id } = this.state;
    this.setState(
      { shouldRedirect: false },
      () => {
        movieAPI.deleteMovie(id);
        this.setState({ shouldRedirect: true });
      },
    );
  }

  renderMovieDetails(movie) {
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  render() {
    const { isLoading, movie, shouldRedirect } = this.state;
    const { id } = movie;
    if (shouldRedirect) { return <Redirect to="/" />; }
    return (
      isLoading ? <Loading />
        : (
          <div data-testid="movie-details">
            {this.renderMovieDetails(movie)}
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/" onMouseDown={ this.deleteMovieAPI }>DELETAR</Link>
            <Link to="/">VOLTAR</Link>
          </div>
        )
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape(
    {
      params: {
        id: PropTypes.string,
      },
    },
  ).isRequired,
};

export default MovieDetails;
