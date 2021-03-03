import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const newMovie = await movieAPI.getMovie(id);
    this.setState({ movie: newMovie, loading: false });
  }

  deleteMovie(movieId) {
    movieAPI.deleteMovie(movieId);
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match: { params: { id } } } = this.props;

    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

export default MovieDetails;
