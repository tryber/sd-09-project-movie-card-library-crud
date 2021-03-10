import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      id: 0,
      loading: true,
    };
  }

  componentDidMount() {
    const { getMovie } = movieAPI;
    const { match } = this.props;
    const { id } = match.params;
    getMovie(id).then((movie) => this.setState(() => (
      {
        movie,
        id,
        loading: false,
      }
    )));
  }

  render() {
    const { movie, id, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const movieDetails = (
      <div>
        <img className="movie-card-image" alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to='/'>VOLTAR</Link>
      </div>
    );

    return (
      <div className="movie-card" data-testid="movie-details">
        {loading ? <Loading /> : movieDetails}
      </div>
    );
  }
}

export default MovieDetails;
