import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //    const { title, storyline, imagePath, genre, rating, subtitle } = {};

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    // const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((data) => {
      this.setState({
        loading: false,
        movie: data,
      });
    });
  }

  handleClick() {
    const {
      movie: { id },
    } = this.state;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie: { title,
      storyline,
      imagePath,
      genre, rating, subtitle, id }, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.handleClick }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
