import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieInfo: {},
      isLoading: false,
    };
    this.fetchMovieInfos = this.fetchMovieInfos.bind(this);
  }

  componentDidMount() {
    this.fetchMovieInfos();
  }

  async fetchMovieInfos() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { isLoading: true },
      async () => {
        await movieAPI.getMovie(id)
          .then((res) => this.setState({ isLoading: false, movieInfo: res }));
      },
    );
  }

  render() {
    const { movieInfo, isLoading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movieInfo;
    return (
      <div data-testid="movie-details">
        { isLoading ? <Loading />
          : (
            <div>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{ `Title: ${title}` }</p>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <Link to="/">VOLTAR</Link>
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            </div>)}
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
