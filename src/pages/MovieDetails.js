import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: false,
      status: 'loading',
      movie: '',
    };

    this.loadMovie = this.loadMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.loadMovie();
  }

  async loadMovie() {
    const { match: { params: { id } } } = this.props;
    const response = await movieAPI.getMovie(id);

    this.setState({
      status: 'ready',
      movie: response,
    });
  }

  async deleteMovie() {
    const { movie } = this.state;
    const { id } = movie;
    await movieAPI.deleteMovie(id);
    this.setState({
      shouldRedirect: true,
    });
    console.log(id);
  }

  render() {
    const { shouldRedirect, status, movie } = this.state;
    const { title, imagePath, subtitle, storyline, genre, rating, id } = movie;
    if (shouldRedirect) return (<Redirect to="/" />);
    if (status === 'loading') return (<Loading />);

    return (
      <div data-testid="movie-details">
        <p>{ title }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
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
