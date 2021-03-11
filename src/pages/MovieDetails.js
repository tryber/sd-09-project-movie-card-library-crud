import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { shape, number } from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      goHome: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then(
      (film) => this.setState({ movie: film }),
    );
  }

  render() {
    const { movie, goHome } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (goHome) return <Redirect to="/" />;
    if (movie.length === 0) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: shape({
    params: shape({
      id: number,
    }),
  }).isRequired,
};

export default MovieDetails;
