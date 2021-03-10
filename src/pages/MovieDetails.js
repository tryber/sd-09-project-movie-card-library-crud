import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: true,
    };
    this.fetchReq = this.fetchReq.bind(this);
    this.getElementMovie = this.getElementMovie.bind(this);
  }

  componentDidMount() {
    this.fetchReq();
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
    const { movie, loading } = this.state;
    const { id } = movie;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        {this.getElementMovie()}
        <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
        <Link to="/"> VOLTAR </Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
