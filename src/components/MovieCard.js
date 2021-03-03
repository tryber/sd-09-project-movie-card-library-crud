import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { id, imagePath, title, storyline } = this.props.movie;
    return (
      <div data-testid="movie-card" name={ id }>
        <img src={ imagePath }/>
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <Link to={`/movies/${ id }`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
