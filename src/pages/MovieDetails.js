import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      movieDetails: {},
    };
    this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    this.getMovieDetails(match.params.id);
  }

  async getMovieDetails(movieId) {
    this.setState(
      { loading: true },
      async () => {
        const movieDetails = await movieAPI.getMovie(movieId);
        this.setState({
          loading: false,
          movieDetails,
        });
      },
    );
  }

  render() {
    const { movieDetails, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movieDetails;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <br />
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired }).isRequired,
};

export default MovieDetails;
