import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovies = this.fetchMovie.bind(this);
    this.state = {
      movie: [],
      loading: true,
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

  render() {
    const { movie, loading } = this.state;
    const { storyline, imagePath, genre, rating, subtitle, title, id } = movie;
    return (
      loading
        ? <Loading />
        : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Título: ${title}` }</p>
            <p>{ `Subtítulo: ${subtitle}` }</p>
            <p>{ `Sinopse: ${storyline}` }</p>
            <p>{ `Gênero: ${genre}` }</p>
            <p>{ `Avaliação: ${rating}` }</p>
            <Link to="/">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          </div>
        )
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
