import React, { Component } from 'react';

import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {

  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params } } = this.props;
    try {
      const movie = await getMovie(params.id);
      this.setState({
        movie,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (!this.state) {
      return <Loading />;
    }
    const { movie: { title, storyline, imagePath, genre, rating, subtitle } } = this.state;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

export default MovieDetails;
