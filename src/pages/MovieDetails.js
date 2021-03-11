import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: undefined,
    };

    this.printMovieDetailOrLoading = this.printMovieDetailOrLoading.bind(this);
    this.printMovieDetails = this.printMovieDetails.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.getMovie(id).then((response) => {
      this.setState({
        movie: response,
      });
    });
  }

  printMovieDetailOrLoading() {
    const { movie } = this.state;
    if (movie === undefined) {
      return (
        <p>Carregando...</p>
      );
    }

    return (
      <div>
        {this.printMovieDetails()}
      </div>
    );
  }

  printMovieDetails() {
    const { movie } = this.state;
    const { imagePath, subtitle, storyline, genre, rating, title, id } = movie;
    return (
      <div>
        <p>{ `Title: ${title}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    return (
      <div data-testid="movie-details">
        <p>MovieDetails</p>
        {this.printMovieDetailOrLoading()}
        <Link to="/">VOLTAR</Link>
        <br />
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
