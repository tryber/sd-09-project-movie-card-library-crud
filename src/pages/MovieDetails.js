import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState(
      {
        loading: true,
      },
      async () => {
        const { match } = this.props;
        const { params } = match;
        const response = await movieAPI.getMovie(params.id);
        this.setState({
          loading: false,
          movie: response,
        });
      },
    );
  }

  renderMovie() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details" className="movie-card">
        <img alt="Movie Cover" src={ `../${imagePath}` } className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h4 className="movie-card-subtitle">{ subtitle }</h4>
          <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
    return (
      this.renderMovie()
    );
  }
}

MovieDetails.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

export default MovieDetails;
