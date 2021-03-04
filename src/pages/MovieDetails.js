import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import './MovieDetails.css';

const initialState = {
  loading: true,
  movie: '',
};

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.fetchMovieById = this.fetchMovieById.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    this.fetchMovieById(match.params.id);
  }

  async fetchMovieById(id) {
    const requestReturn = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie: requestReturn,
    });
  }

  async deleteThisMovie(id) {
    await movieAPI.deleteMovie(id);
    return <Redirect to="/" />;
  }

  createPartOfCard(movie) {
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } className="card-detal-image " />
        <div className="card-detail-context">
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
      </div>
    );
  }

  render() {
    const { movie, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details" className="card-detail-body">
        {this.createPartOfCard(movie)}
        <hr />
        <Link to={ `/movies/${movie.id}/edit` } className="card-detail-link">EDITAR</Link>
        <Link to="/" className="card-detail-link">VOLTAR</Link>
        <Link
          to="/"
          className="card-detail-link"
          onClick={ () => this.deleteThisMovie(movie.id) }
        >
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default MovieDetails;
