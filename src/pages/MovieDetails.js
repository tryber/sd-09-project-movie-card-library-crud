import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: '',
      movieObj: [],
    };
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovieDetails(id);
  }

  handleClick(event) {
  }

  fetchMovieDetails(id) {
    this.setState({ loading: true },
      () => {
        movieAPI.getMovie(id)
          .then((resolve) => (
            this.setState({
              loading: false,
              movieObj: resolve,
            })
          ));
      });
  }

  render() {
    const { loading, movieObj } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movieObj;
    if (loading) { return <Loading />; }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
