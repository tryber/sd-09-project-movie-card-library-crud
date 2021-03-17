import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      movie: '',
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.renderCard = this.renderCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({
      loading: true,
    }, async () => {
      const requestId = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie: requestId,
      });
    });
  }

  deleteCard() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  renderCard() {
    const {
      movie: { title, storyline, imagePath, genre, rating, subtitle, id } } = this.state;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteCard }>DELETAR</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {(loading) ? <Loading /> : this.renderCard()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};

export default MovieDetails;
