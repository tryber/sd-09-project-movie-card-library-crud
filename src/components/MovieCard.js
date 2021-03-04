import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        <h1>{ this.props.movie.title }</h1>
        <h2>{ this.props.movie.storyline }</h2>
        <Link to={`/movies/${this.props.movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
