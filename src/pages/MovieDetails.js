import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);

    this.state = {
      movies: [],
      status: 'loading',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => {
      this.setState({
        movies: movie,
        status: 'loaded',
      });
    });
  }

  handleDeleteMovie() {
    const { movies } = this.state;
    const { id } = movies;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movies, status } = this.state;
    const { id, storyline, imagePath, genre, rating, subtitle, title } = movies;
    if (status === 'loading') return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.handleDeleteMovie }>DELETAR</Link>
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
};
export default MovieDetails;
