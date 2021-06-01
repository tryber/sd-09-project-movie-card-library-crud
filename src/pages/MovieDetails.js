import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.RenderMovieDetails = this.RenderMovieDetails.bind(this);

    const { id: movieId } = props.match.params;
    this.state = {
      movie: {},
      movieId,
      loading: false,
    };
  }

  componentDidMount() {
    this.setMovie();
  }

  setMovie() {
    const { movieId } = this.state;
    this.setState({ loading: true }, async () => {
      const movieResp = await movieAPI.getMovie(movieId);
      this.setState({ movie: movieResp, loading: false });
    });
  }

  RenderMovieDetails() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link><br />
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return loading
      ? <Loading />
      : this.RenderMovieDetails();
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

