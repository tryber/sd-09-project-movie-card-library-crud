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

    this.renderMovies = this.renderMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    // this.props.match.params.id
    const { match: { params: { id } } } = this.props;
    const data = await movieAPI.getMovie(id);
    console.log(data);
    this.setState({
      movie: data,
      loading: false,
    });
  }

  renderMovies() {
    const { movie: movieList } = this.state;
    return console.log(movieList);
  }

  render() {
    // Change the condition to check the state
    const { movie: { id, title, storyline, imagePath, genre, rating, subtitle }, loading } = this.state;
    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : this.renderMovies() }
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieDetails;
