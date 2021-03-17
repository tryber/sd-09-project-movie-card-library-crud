import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchApiMovies();
  }

  fetchApiMovies() {
    this.setState({ loading: true }, async () => {
      const { match } = this.props;
      const reqMovie = await movieAPI.getMovies(match.params.id);
      this.setState({ movie: reqMovie, loading: false });
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        {loading ? (<Loading />) : (
          <div>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{`Title: ${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
