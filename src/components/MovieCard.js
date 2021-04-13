import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { imagePath, genre, rating, storyline, title, subtitle } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } />
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <p>Ver Detalhes</p>
      </div>
    );
  }
}

export default MovieCard;
