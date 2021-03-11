import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.state = {
      id,
      movie: {},
      isLoading: true,
    };
    this.getMovieFromAPI = this.getMovieFromAPI.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    this.getMovieFromAPI(id);
  }

  getMovieFromAPI(movieId) {
    this.setState(
      { isLoading: true },
      async () => {
        const movieFromAPI = await movieAPI.getMovie(movieId);
        this.setState({
          isLoading: false,
          movie: movieFromAPI,
        });
      },
    );
  }

  render() {
    const { isLoading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      isLoading ? <Loading />
        : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Title: ${title}` }</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
          </div>
        )
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape(
    {
      params: {
        id: PropTypes.string,
      },
    },
  ).isRequired,
};

export default MovieDetails;
