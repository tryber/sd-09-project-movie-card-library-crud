import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.movieRender = this.movieRender.bind(this);
    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  componentDidUpdate() {
    this.movieRender();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;
    const requestReturn = await getMovie(id);
    this.setState({
      movie: requestReturn,
    });
  }

  movieRender() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
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

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    return (
      <div>{ movie.length !== 0 ? this.movieRender() : <Loading /> }</div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({}).isRequired,
  params: PropTypes.shape({}).isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieDetails;
