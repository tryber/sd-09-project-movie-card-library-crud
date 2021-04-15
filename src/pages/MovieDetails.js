import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loaded: false,
      id: props.match.params.id,
    };
    this.getMovieApi = this.getMovieApi.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
  }

  componentDidMount() {
    this.getMovieApi();
  }

  getMovieApi() {
    this.setState({ loaded: false });
    const { id } = this.state;
    movieAPI.getMovie(id)
      .then((movie) => {
        this.setState({ movie });
        this.setState({ loaded: true });
      });
  }

  renderDetails(movie, id) {
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <>
        <section>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h1>{ `Title: ${title}` }</h1>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </section>
        <Link to={ { pathname: `/movies/${id}/edit` } }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
      </>
    );
  }

  render() {
    const { loaded, movie, id } = this.state;
    return (
      <div data-testid="movie-details">
        {
          !loaded
            ? <Loading />
            : this.renderDetails(movie, id)
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.string,
}.isRequired;

export default MovieDetails;
