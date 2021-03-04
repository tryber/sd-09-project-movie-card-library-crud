import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      id: 0,
      title: '',
      subtitle: '',
      storyline: '',
      genre: '',
      imagePath: '',
      rating: 0,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const requestMovies = await movieAPI.getMovie(id);
    this.setState({
      id: requestMovies.id,
      title: requestMovies.title,
      subtitle: requestMovies.subtitle,
      storyline: requestMovies.storyline,
      imagePath: requestMovies.imagePath,
      genre: requestMovies.genre,
      rating: requestMovies.rating,
      loading: false,
    });
  }

  render() {
    const { id, title, storyline, imagePath,
      genre, rating, subtitle, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
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
