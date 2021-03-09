import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import '../styles/Pages/MovieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loadding: true,
    };
    this.getMovie = this.getMovie.bind(this);
    this.loadParagraph = this.loadParagraph.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const movie = await movieAPI.getMovie(match.params.id);
    this.getMovie(movie);
  }

  getMovie(movie) {
    this.setState({
      movie,
      loadding: false,
    });
  }

  loadParagraph({ title, subtitle, storyline, genre, rating }) {
    return (
      <>
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </>
    );
  }

  render() {
    const { loadding, movie } = this.state;
    const { id, imagePath } = movie;
    return (
      <div className="movie-details-container" data-testid="movie-details">
        { (loadding) ? (<Loading />) : (
          <div className="movie-details-card">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            { this.loadParagraph(movie) }
            <div>
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
            </div>
          </div>
        ) }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
