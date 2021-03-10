import React, { Component } from 'react';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
    };

    this.deleteMovieId = this.deleteMovieId.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    getMovie(params.id).then((res) => {
      this.setState({
        movie: res,
      });
    }).catch((error) => console.log(error));
  }

  deleteMovieId() {
    const { match } = this.props;
    const { params } = match;
    deleteMovie(params.id);
  }

  render() {
    // Change the condition to check the state
    const { movie } = this.state;
    if (movie.length < 1) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match: { params } } = this.props;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${params.id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.deleteMovieId }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
