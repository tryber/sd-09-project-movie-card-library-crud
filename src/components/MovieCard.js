import React from 'react';
import { Link } from 'react-router-dom';
// import propTypes from 'prop-types';


class MovieCard extends React.Component {
  render() {
    const { image, title, storyline } = this.props;
    return (
      <div data-testid="movie-card">
        Movie Card
        <img src={ image } alt={ title } />
        <p>{ title }</p>
        <p>{ storyline }</p>
        <p><Link to="/movies/:id">VER DETALHES</Link></p>
      </div>
    );
  }
}

export default MovieCard;

// MovieCard.propTypes = {

// }
