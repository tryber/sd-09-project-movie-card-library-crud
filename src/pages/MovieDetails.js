import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.setNewMovie = this.setNewMovie.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const movie = await movieAPI.fetchMovie(match.params.id);
    this.fetchMovie(movie);
  }

  setNewMovie({ title, subtitle, storyline, genre, rating, imagePath }) {
    return (
      <div>
        <img
          alt="Movie Cover"
          src={ (imagePath.includes('http')) ? imagePath : `../${imagePath}` }
        />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  fetchMovie(movie) {
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { loading, movie } = this.state;
    const { id } = movie;
    return (
      <div data-testid="movie-details">
        { (loading) ? (<Loading />) : (
          <div>
            { this.loadMovieFields(movie) }
            <div>
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
              <Link to="/">VOLTAR</Link>
            </div>
          </div>
        ) }
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
