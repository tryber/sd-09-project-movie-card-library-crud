import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.state = {
      loading: true,
      movie: {},
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { loading: true },
      async () => {
        const fetchedMovie = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: fetchedMovie,
        });
      },
    );
  }

  async deleteMovie(evt) {
    evt.preventDefault();
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { shouldRedirect: false },
      async () => {
        await movieAPI.deleteMovie(id);
        this.setState({
          shouldRedirect: true,
        });
      },
    );
  }

  renderDetails() {
    const { match } = this.props;
    const { id } = match.params;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details" className="movie-details">
        <img alt="Movie Cover" src={ `/${imagePath}` } />
        <p>{ `Título: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }

  render() {
    const { loading, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    if (loading) return <div className="movie-list"><Loading /></div>;
    return this.renderDetails();
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
