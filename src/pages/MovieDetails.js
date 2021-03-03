import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: '',
      subtitle: '',
      storyline: '',
      genre: '',
      rating: 0,
      id: '',
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({
        loading: false,
        title: movie.title,
        subtitle: movie.subtitle,
        storyline: movie.storyline,
        imagePath: movie.imagePath,
        genre: movie.genre,
        rating: movie.rating,
        id: movie.id,
      }));
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, loading, id } = this.state;
    if (loading) return <Loading />;
    return (
      <section>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </section>
    );
  }
}
const { string } = PropTypes;
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: string,
    }),
  }),
};

MovieDetails.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: '',
    }),
  }),
};

export default MovieDetails;
