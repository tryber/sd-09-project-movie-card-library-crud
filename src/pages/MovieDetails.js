import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then(
      (film) => this.setState({ movie: film }),
    );
  }

  render() {
    const { id } = this.props.match.params;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const loadingComponent = <Loading />;
    if (Object.keys(movie).length === 0) return loadingComponent;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/"> VOLTAR </Link>
        <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
      </div>
    );
  }
}

export default MovieDetails;
