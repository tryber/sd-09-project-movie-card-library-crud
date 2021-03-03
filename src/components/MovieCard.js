import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <p>{movie}</p>
      </div>
    );
  }
}

export default MovieCard;
