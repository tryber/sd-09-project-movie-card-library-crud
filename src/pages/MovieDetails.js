import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

const initialState = {
  loading: true,
  movie: '',
};

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.movieRender = this.movieRender.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this); 
    this.state = initialState;
  }

  componentDidMount() {
    const { match } = this.props;
    this.fetchMovie(match.params.id);
  }

  async fetchMovie(id) {
    const requestReturn = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie: requestReturn,
    });
  }

  movieRender(movie) {
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  render() {
    const { movie, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        { this.movieRender(movie) }
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default MovieDetails;
