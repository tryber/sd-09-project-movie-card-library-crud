import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    return movieAPI.getMovie(id)
      .then((response) => this
        .setState((previousState) => ({
          ...previousState,
          movie: response,
          loading: false,
        })));
  }

  async delete() {
    const { movie: { id } } = this.state;
    return movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ `Title: ${title}` }</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={ () => this.delete(id) }>DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
