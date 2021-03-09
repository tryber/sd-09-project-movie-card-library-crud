import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img
          className="movie-card-image"
          src={ imagePath }
          alt={ `${title} movie poster` }
        />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
