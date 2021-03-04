import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {

  componentDidMount() {
    const { match: { params } } = this.props;
    movieAPI.getMovie(params.id).then((apiValue) => this.setState({ movie: apiValue }));
    movieAPI.deleteMovie(params.id);
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (!this.state) return <Loading />;
    const { match: { params } } = this.props;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ title }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${params.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ movieAPI.deleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
