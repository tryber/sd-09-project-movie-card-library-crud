import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movieSelected: {},
    };
  }

  async componentDidMount() {
    const { id } = this.props;
    return movieAPI.getMovie(id).then((movie) => this.setState({ movieSelected: movie }));
  }

  render() {
    // Change the condition to check the state
    const { movieSelected } = this.state;
    const { storyline, imagePath, genre, rating, subtitle, id } = movieSelected;
    if (Object.keys(movieSelected).length === 0) return <Loading />;
    return (
      <div data-testid="movie-details" className="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ `../${imagePath}` } />
        <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
        <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
        <p className="movie-card-genre">{ `Genre: ${genre}` }</p>
        <p className="movie-card-rating">{ `Rating: ${rating}` }</p>
        <div>
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/:${id}/edit` }>EDITAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
