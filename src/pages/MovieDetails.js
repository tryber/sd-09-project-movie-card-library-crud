import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfoReceived: false,
      movieInfo: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((movie) => this.setState({
      movieInfo: movie,
      movieInfoReceived: true,
    }));
  }

  render() {
    const { movieInfo, movieInfoReceived } = this.state;
    const { id, title, storyline, imagePath,
      genre, rating, subtitle } = movieInfo;
    return (
      <div>
        {movieInfoReceived ? null : <Loading /> }
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}`}</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
