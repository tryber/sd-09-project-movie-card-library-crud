import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      storyline: '',
      subtitle: '',
      imagePath: '',
      genre: '',
      rating: 0,
      load: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id).then((movie) => this.setState({
      id: movie.id,
      title: movie.title,
      storyline: movie.storyline,
      subtitle: movie.subtitle,
      imagePath: movie.imagePath,
      genre: movie.genre,
      rating: movie.rating,
      load: false,
    }));
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id, load } = this.state;
    if (load) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
