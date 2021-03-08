import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(state) {
    super(state);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      genre: '',
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    await movieAPI.getMovie(match.params.id).then((res) => {
      this.setState({
        title: res.title,
        subtitle: res.subtitle,
        storyline: res.storyline,
        imagePath: res.imagePath,
        genre: res.genre,
        loading: false,
      });
    });
  }

  render() {
    const { match } = this.props;
    const { loading, storyline, imagePath, genre, subtitle, title } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <div data-testid="movie-details">
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${match.params.id}/edit` }>
          EDITAR
        </Link>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string }).isRequired,
  }).isRequired,
};

export default MovieDetails;
