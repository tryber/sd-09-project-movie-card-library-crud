import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movie: {},
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then(
      (film) => this.setState({ movie: film }),
    );
  }

  deleteMovie() {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id).then(
      () => this.setState({ shouldRedirect: true }),
    );
  }

  showLoading() {}

  render() {
    const { id } = this.props.match.params;
    const { movie, shouldRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const loadingComponent = <Loading />;
    if (Object.keys(movie).length === 0) return loadingComponent;
    if (shouldRedirect) return <Redirect to="/" />;
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
        <Link to="/" onClick={ this.deleteMovie }> DELETAR </Link>
      </div>
    );
  }
}

export default MovieDetails;
