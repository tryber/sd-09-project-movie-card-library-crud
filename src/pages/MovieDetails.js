import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: true,
      shouldRedirect: false,
    };
    this.fetchReq = this.fetchReq.bind(this);
    this.getElementMovie = this.getElementMovie.bind(this);
    this.handleDelet = this.handleDelet.bind(this);
  }

  componentDidMount() {
    this.fetchReq();
  }

  async handleDelet() {
    const { movie } = this.state;
    const deletMovie = await movieAPI.deleteMovie(movie.id);
    this.setState({
      shouldRedirect: true,
    });
    return deletMovie;
  }

  getElementMovie() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `titles: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>);
  }

  async fetchReq() {
    const { match } = this.props;
    const { params } = match;
    this.setState({
      loading: true,
    }, async () => {
      const movie = await movieAPI.getMovie(params.id);
      this.setState({
        loading: false,
        movie,
      });
    });
  }

  render() {
    const { movie, loading, shouldRedirect } = this.state;
    const { id } = movie;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) return <Loading />;
    return (
      <div>
        {this.getElementMovie()}
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.handleDelet() }>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
