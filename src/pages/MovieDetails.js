import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    }
  }

  componentDidMount() {
    const { getMovie } = movieAPI;
    const { id } = this.props.match.params;
    console.log('id', id);
    getMovie(id).then((movie) => this.setState(() => (
      {
        movie,
        loading: false,
      }
    )));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    const movieDetails = (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );

    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : movieDetails}
      </div>
    );
  }
}

export default MovieDetails;
