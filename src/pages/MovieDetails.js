import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      key: true,
    };
    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
    this.deleteMovies = this.deleteMovies.bind(this);
  }

  componentDidMount() {
    this.getMovieDetails();
  }

  async getMovieDetails() {
    const { match: { params } } = this.props;
    const data = await movieAPI.getMovie(params.id);

    this.setState({
      movie: { ...data },
      key: false,
    });
  }

  async deleteMovies() {
    const { match: { params } } = this.props;
    const newList = movieAPI.deleteMovie(params.id);

    this.setState({
      movie: newList,
    });
  }

  renderInfo() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovies }>DELETAR</Link>
      </div>
    );
  }

  render() {
    const { key } = this.state;
    return (
      <div>
        { key
          ? <Loading />
          : this.renderInfo()}
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.arrayOf(PropTypes.array).isRequired,
};
