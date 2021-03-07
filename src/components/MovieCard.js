import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div data-testid="movie-card">
        <h2>{movies.title}</h2>
        <h3>{movies.storyline}</h3>
        <Link to={`/movies/${ movies.id }`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
