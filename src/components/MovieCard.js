import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <h4>{ title }</h4>
        <p>{ storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
