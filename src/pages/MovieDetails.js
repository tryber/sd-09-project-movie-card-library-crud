import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieList from './MovieList';

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
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;

    const movie = await movieAPI.getMovie(id);

    this.setState({
      movie,
      loading: false,
    });
  }

  async removeMovie(id) {
    const request = await movieAPI.deleteMovie(id);

    // console.log(request.status);
    return (request.status === 'OK') && this.setState({ shouldRedirect: true });
  }

  checkImageURL(image) {
    if (!image.includes('http')) return `../${image}`;

    return image;
  }

  structureDetails({ title, storyline, imagePath, genre, rating, subtitle }) {
    const { match } = this.props;
    const { id } = match.params;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ this.checkImageURL(imagePath) } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="links">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ () => this.removeMovie(id) }>DELETAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>);
  }

  render() {
    const { movie, shouldRedirect, loading } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" component={ MovieList } />;
    }

    return (loading) ? <Loading /> : this.structureDetails(movie);
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
