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
      movie: {},
    };

    this.cardElement = this.cardElement.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    this.fetchMovieFromAPI();
  }

  async fetchMovieFromAPI() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const fetchMovie = await movieAPI.getMovie(id);
        this.setState({
          movie: fetchMovie,
          loading: false,
        });
      },
    );
  }

  deleteCard(id) {
    movieAPI.deleteMovie(id);
  }

  cardElement() {
    const { movie: { title, storyline,
      imagePath, genre, rating, subtitle, id } } = this.state;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{ `Título: ${title}` }</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={ () => this.deleteCard(id) }>DELETAR</Link>
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
    return this.cardElement();
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default MovieDetails;
