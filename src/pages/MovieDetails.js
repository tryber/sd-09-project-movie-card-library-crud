import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovies = this.fetchMovie.bind(this);
    this.delete = this.delete.bind(this);
    this.state = {
      movie: [],
      loading: true,
      redirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const fetchedMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: fetchedMovie,
      loading: false,
    });
  }

  async delete() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
    this.setState({ redirect: true });
  }

  render() {
    const { movie, loading, redirect } = this.state;
    const { storyline, imagePath, genre, rating, subtitle, title, id } = movie;
    if (loading) return <Loading />;
    if (redirect) return <Redirect to="/" />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Título: ${title}` }</p>
        <p>{ `Subtítulo: ${subtitle}` }</p>
        <p>{ `Sinopse: ${storyline}` }</p>
        <p>{ `Gênero: ${genre}` }</p>
        <p>{ `Avaliação: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.delete }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = ({
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.number,
  subtitle: PropTypes.string,
}).isRequired;

export default MovieDetails;
