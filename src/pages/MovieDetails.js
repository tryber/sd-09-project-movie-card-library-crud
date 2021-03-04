import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieList from './MovieList';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);

    this.setState({
      movie,
      loading: false,
    })
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async removeMovie(id) {
    const request = await movieAPI.deleteMovie(id);

    // console.log(request.status);
    return (request.status === 'OK') && this.setState({ shouldRedirect: true });
  }

  structureDetails({ title, storyline, imagePath, genre, rating, subtitle }) {
    const { params } = this.props.match;
    const { id } = params;

    if (id < 5) {
      imagePath = `../${imagePath}`;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="links">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ () => this.removeMovie(id) }>DELETAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>);
  }

  render() {
    const { movie, shouldRedirect, loading } = this.state;

    if (shouldRedirect) {
      return <Redirect to='/' component={ MovieList } />;
    }

    return (loading) ? <Loading /> : this.structureDetails(movie);
  }
}

export default MovieDetails;
