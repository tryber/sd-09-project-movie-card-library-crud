import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      title: '',
      storyline: '',
      subtitle: '',
      imagePath: '',
      genre: '',
      rating: 0,
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovie().then((receivedMovie) => {
      this.setState({
        movie: receivedMovie,
        loading: false,
      })
    });
  }

  render() {
    if(loading) return <Loading />
    const { title, storyline, imagePath, genre, rating, subtitle, loading } = this.state;

    return (
      <div data-testid="movie-details">
        <h2>{ title }</h2>
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
