import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.movieRequisition = this.movieRequisition.bind(this);
    this.movieElement = this.movieElement.bind(this);
    this.deletingMovie = this.deletingMovie.bind(this);

    this.state = {
      loadingCheck: true,
      movie: {},
    };
  }

  async componentDidMount() {
    this.movieRequisition();
  }

  async movieRequisition() {
    const { match: { params: { id } } } = this.props;
    const resultGetMovie = await movieAPI.getMovie(id);
    this.setState({ movie: { ...resultGetMovie }, loadingCheck: false });
  }

  deletingMovie() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
    return '/';
  }

  movieElement(movie) {
    const { id, storyline, imagePath, genre, rating, subtitle } = movie;
    const movieElement = (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <br />
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <br />
        <Link to={ this.deletingMovie() }>DELETAR</Link>
      </div>
    );
    return movieElement;
  }

  render() {
    const { movie, loadingCheck } = this.state;

    return (
      <div>
        {
          loadingCheck
            ? <Loading />
            : this.movieElement(movie)
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf,
};

MovieDetails.defaultProps = {
  match: 'Object not received',
};

export default MovieDetails;
