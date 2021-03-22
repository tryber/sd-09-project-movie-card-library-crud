import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.require = this.require.bind(this);
    this.state = {
      id: undefined,
      load: true,
      title: '',
      storyline: '',
      imagePath: '',
      genre: '',
      rating: '',
      subtitle: '',
    };
  }

  componentDidMount() {
    this.require();
  }

  async require() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({
      id,
    });
    const movie = await movieAPI.getMovie(id);
    this.setState({
      title: movie.title,
      storyline: movie.storyline,
      imagePath: movie.imagePath,
      genre: movie.genre,
      rating: movie.rating,
      subtitle: movie.subtitle,
      load: false,
    });
  }

  details() {
    const { title, id, imagePath, subtitle, storyline, genre, rating } = this.state;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
      </div>
    );
  }

  render() {
    const { load } = this.state;
    return load ? <Loading /> : this.details();
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
