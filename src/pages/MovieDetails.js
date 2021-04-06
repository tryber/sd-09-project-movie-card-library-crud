import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfoReceived: false,
      movieInfo: {},
    };
    this.deleteThisMovie = this.deleteThisMovie.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.getMovie(id).then((movie) => this.setState({
      movieInfo: movie,
      movieInfoReceived: true,
    }));
  }

  deleteThisMovie(id) {
    movieAPI.deleteMovie(id);
    console.log('deletou');
  }

  render() {
    const { movieInfo, movieInfoReceived } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movieInfo;
    return (
      <div>
        {movieInfoReceived ? null : <Loading /> }
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}`}</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ () => this.deleteThisMovie(id) }>DELETAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
