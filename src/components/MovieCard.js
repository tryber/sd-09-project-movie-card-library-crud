import React from 'react';
import { Link } from 'react-router-dom';
// import MovieDetails from '../pages/MovieDetails';
import PropTypes from 'prop-types';
// import movieData from '../services/movieData';
// import MovieList from '../pages/MovieList';

class MovieCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: 0,
  //   };
  //   // this.renderCard = this.renderCard.bind(this);
  // }

  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <span>{title}</span>
        <span>{storyline}</span>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

// MovieCard.propTypes = {
//   key: PropTypes.string.isRequired,
//   movie: PropTypes.string.isRequired,
// };

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
