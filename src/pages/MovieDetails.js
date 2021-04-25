import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { movie } = this.state;
    this.fetchMovie();
    console.log(movie);
  }

  async handleClick() {
    const { movie } = this.state;
    const { id } = movie;
    await movieAPI.deleteMovie(id);
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movieObject = await movieAPI.getMovie(id);
    this.setState({ movie: movieObject,
      loading: false,
    });
  }

  render() {
    const { loading, movie } = this.state;
    const { id, title, subtitle, storyline, imagePath, genre } = movie;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <h2>{title}</h2>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{`Genre: ${genre}`}</p>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <Link to="/" onClick={ this.handleClick }>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
