import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const detailRoutePath = `/movies/${movie.id}`;
    return (
      <div data-testid="movie-card">
        <p>
          Title:
          { movie.title }
        </p>
        <p>
          StoryLine:
          { movie.storyline }
        </p>
        <Link to={ detailRoutePath }>VER DETALHES</Link>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      id: PropTypes.number,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string,
    },
  ).isRequired,
};
export default MovieCard;
