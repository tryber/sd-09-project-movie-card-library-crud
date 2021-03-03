import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      check: false,
      movie: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovie(id)

  }

  async fetchMovie(movie) {
    const request = await movieAPI.getMovie(movie);
    this.setState({
      check: true,
      movie: request,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { check, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (!check) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to='/'>VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};


export default MovieDetails;
