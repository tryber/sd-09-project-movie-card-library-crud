import React from 'react';
import PropTypes from 'prop-types';

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

MovieCard.propTypes = {
  movie: PropTypes.string,
};
MovieCard.defaultProps = {
  movie: 'defailt',
};

export default MovieCard;
