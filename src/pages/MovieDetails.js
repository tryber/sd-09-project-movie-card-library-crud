import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import NotFound from './NotFound';

export default class MovieDetails extends Component {
  constructor() {
    super();
    this.listMovies = this.listMovies.bind(this);
    this.state = {
      movie: [],
      loading: true,
      notFound: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.listMovies(id);
  }

  async listMovies(id) {
    this.setState(
      { loading: true },
      async () => {
        const movieC = await movieAPI.getMovies(id);
        if (!movieC) {
          return (this.setState({ loading: false, notFound: false }));
        }
        this.setState({ movie: movieC, loading: false });
      },
    );
  }

  // Change the condition to check the state
  // if (true) return <Loading />;
  // const { title, storyline, imagePath, genre, rating, subtitle } = {};

  movieCard() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <section>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
          <Link to="/">VOLTAR</Link>
        </section>
      </div>
    );
  }

  render() {
    const { loading, notFound } = this.state;
    if (!notFound) return <NotFound />;
    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : this.movieCard() }
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
