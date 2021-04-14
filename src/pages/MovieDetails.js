import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovieList = this.fetchMovieList.bind(this);
    this.requestDeleteMovie = this.requestDeleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovieList();
  }

  async requestDeleteMovie() {
    const { match: { params } } = this.props;
    try {
      await deleteMovie(params.id);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovieList() {
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
        <Link to="/" onClick={ this.requestDeleteMovie }>DELETAR</Link>
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
