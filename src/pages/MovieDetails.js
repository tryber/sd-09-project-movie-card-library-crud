import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movieObject = await movieAPI.getMovie(id);
    this.setState({ movie: movieObject,
      loading: false,
    });
    console.log(movieObject);
  }

  render() {
    const { loading, movie } = this.state;
    const { id, title, subtitle, storyline, imagePath, genre, rating } = movie;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <h2>{title}</h2>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating:${rating}`}</p>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        <button type="button"><Link to="/">VOLTAR</Link></button>
      </div>
    );
  }
}

export default MovieDetails;
