import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params: { id } } = match;
    movieAPI.getMovie(id).then((resolve) => {
      this.setState({ movie: resolve });
    });
  }

  render() {
    const { movie } = this.state;
    if (movie.length < 1) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
        <Link to="/"> VOLTAR </Link>
      </div>
    );
  }
}
MovieDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }),
}.isRequired;

export default MovieDetails;
