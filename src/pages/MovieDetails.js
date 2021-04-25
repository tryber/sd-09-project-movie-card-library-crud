import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import NotFound from './NotFound';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.moviePromise = this.moviePromise.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      loading: true,
      movie: [],
      notFind: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.moviePromise(id);
  }

  async moviePromise(id) {
    this.setState(
      { loading: true },
      async () => {
        const promiseMovie = await movieAPI.getMovie(id);
        if (!promiseMovie) {
          return (this.setState({ loading: false, notFind: false }));
        }
        this.setState({ loading: false, movie: promiseMovie });
      },
    );
  }

  deleteMovie(idMovie) {
    movieAPI.deleteMovie(idMovie);
  }

  renderMovie() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{title}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }

  render() {
    const { loading, notFind } = this.state;

    if (!notFind) return <NotFound />;

    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : this.renderMovie() }
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
