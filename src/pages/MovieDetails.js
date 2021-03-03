import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: {},
    };

    this.cardElement = this.cardElement.bind(this);
  }

  componentDidMount() {
    this.fetchMovieFromAPI();
  }

  async fetchMovieFromAPI() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const fetchMovie = await movieAPI.getMovie(id);
        this.setState({
          movie: fetchMovie,
          loading: false,
        });
      },
    );
  }

  cardElement() {
    const { match: { params: { id } } } = this.props;
    const { movie: { title, storyline,
      imagePath, genre, rating, subtitle } } = this.state;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{ `Título: ${title}` }</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
    return this.cardElement();
  }
}

export default MovieDetails;
