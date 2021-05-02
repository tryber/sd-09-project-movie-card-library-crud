import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';

import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props); this.state = { loading: true, movie: [] };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((success) => this.setState({ movie: success }))
      .then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading, movie } = this.state;
    const { id, storyline, title, imagePath, genre, rating, subtitle } = movie;
    const detalhesVideo = (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `Title: ${title} `}</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">DELETAR</Link>
      </div>
    );

    return loading ? <Loading /> : detalhesVideo;
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.shape(),
}.isRequired;

export default MovieDetails;
