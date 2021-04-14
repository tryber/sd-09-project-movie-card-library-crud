import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.requestDelete = this.requestDelete.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async requestDelete() {
    const { match: { params } } = this.props;
    try {
      await deleteMovie(params.id);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovie() {
    const { match: { params } } = this.props;
    try {
      const movie = await getMovie(params.id);
      this.setState({
        movie,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (!this.state) return <Loading />;
    const { movie } = this.state;
    const { title, subtitle, imagePath, storyline, genre, rating } = movie;
    const { match: { params } } = this.props;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ title }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${params.id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.requestDelete }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
