import React from 'react';
import {Link} from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;    
    return (      
      <div data-testid="movie-card">
        <img src={movie.imagePath}/>
        <h2>{movie.title}</h2>
        <p>{movie.storyline}</p>
        <br />
        <Link to={`/movies/${movie.id}`}>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

export default MovieCard;
