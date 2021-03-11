import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.getMovie = this.getMovie.bind(this);
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const {match} = this.props;
    try {
      this.setState({
        movie: await movieAPI.getMovie(match.params.id),
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    // const { movie } = this.props;
    // console.log(movie);
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}`}</p>
        <p>{ `Storyline: ${storyline}`}</p>
        <p>{ `Genre: ${genre}`}</p>
        <p>{ `Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
