import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props)

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      title: '',
      storyline: '',
      imagePath: '',
      genre: '',
      rating: '',
      subtitle: '',
      isLoading: false,
    }
  }

  async fetchMovie() {
    this.setState({isLoading: true})

    const movie = await movieAPI.getMovie(this.props.match.params.id);
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie

    this.setState({
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      isLoading: false,
    });
  }

  componentDidMount() {
    this.fetchMovie()
  }

  render() {
    // Change the condition to check the state
    if (this.state.isLoading === true) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to="/">VOLTAR</Link>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
