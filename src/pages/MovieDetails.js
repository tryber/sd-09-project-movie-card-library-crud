import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movies: [],
    };

    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }

  async fetchMovieDetails() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const response = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movies: response,
    });
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { movies, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;
    if (loading === true) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <p><Link to={ `/movies/${id}/edit` }>EDITAR</Link></p>
        <p><Link to="/">VOLTAR</Link></p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.string,
  params: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
