import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <div style={ { backgroundImage: `url(${imagePath})` } }>{title}</div>
        {/* <img src={imagePath} alt={title} /> */}
        <h3>{title}</h3>
        <p>{storyline}</p>
        {/* <Link to={``} >Ver detalhes</Link> */}
      </div>
    );
  }
}

export default MovieCard;
