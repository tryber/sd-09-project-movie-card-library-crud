import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      title: '',
      storyline: '',
      imagePath: '',
      genre: '',
      rating: '',
      subtitle: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { params } = match;
    const movie = await movieAPI.getMovie(params.id);
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    this.setState({
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      isLoading: false,
    });
  }

  async deleteMovie(movieId) {
    await movieAPI.deleteMovie(movieId);
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading === true) return <Loading />;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </div>
        <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
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
