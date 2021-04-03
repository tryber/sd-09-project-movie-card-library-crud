import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({
        loading: false,
        movie,
      }));
  }

  movieInfo(movie) {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `Title: ${title}` }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ { pathname: `/movies/${id}/edit`, state: movie } }>EDITAR</Link>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    return (
      <div data-testid="movie-details">
        {
          loading
            ? <Loading />
            : this.movieInfo(movie)
        }
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;

export default MovieDetails;
