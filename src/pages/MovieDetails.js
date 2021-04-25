import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      movie: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const { id } = params;
    return movieAPI.getMovie(id)
      .then((response) => this
        .setState((previousState) => ({
          ...previousState,
          loading: false,
          movie: response,
        })));
  }

  handleDelete(id) {
    return movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="../">VOLTAR</Link>
        <Link to="/" onClick={ () => this.handleDelete(id) }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
