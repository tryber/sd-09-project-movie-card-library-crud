import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      imagePath: '',
      title: '',
      subtitle: '',
      storyline: '',
      genre: '',
      rating: 0,
    };

    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const { id } = params;
    movieAPI.getMovie(id).then(
      (selectedMovie) => {
        const { title, storyline, imagePath, genre, rating, subtitle } = selectedMovie;
        this.setState({
          loading: false,
          imagePath,
          title,
          genre,
          rating,
          subtitle,
          storyline,
        });
      },
    );
  }

  async deleteCard() {
    const { match: { params } } = this.props;
    const { id } = params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, title, storyline, imagePath, genre, rating, subtitle } = this.state;
    if (loading) return <Loading />;
    const { match: { params } } = this.props;
    const { id } = params;
    return (
      <div className="movie-card-details" data-testid="movie-details">
        <img className="movie-card-image" alt="Movie Cover" src={ `../${imagePath}` } />
        <h4 className="movie-card-title">{ `Title: ${title}` }</h4>
        <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
        <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p className="movie-card-id">{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` } className="btn">EDITAR</Link>
        <Link to="/" className="btn">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteCard } className="btn">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
