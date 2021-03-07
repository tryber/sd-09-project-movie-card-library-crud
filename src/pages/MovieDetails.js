import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: '',
      link: '',
    };

    this.fetchData = this.fetchData.bind(this);
    this.movieRender = this.movieRender.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  movieRender() {
    const { movies, link } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{ title }</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ link }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }

  async fetchData() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;
    const data = await getMovie(id);
    this.setState({
      movies: data,
      link: `/movies/${id}/edit`,
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-details">
        { movies === '' ? <Loading /> : this.movieRender() }
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
