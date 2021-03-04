import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { shape, number } from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      info: {},
    };
  }

  componentDidMount() {
    this.fetchMovieInfo();
  }

  async fetchMovieInfo() {
    const { match } = this.props;
    const { id } = match.params;
    const info = await movieAPI.getMovie(id)
      .then((res) => res)
      .catch((error) => {
        console.error(error);
        // Vou tratar o erro depois que atingir os 100% ^^'
        return { error, message: 'Error fecthing movie info' };
      });
    this.setState({ info, loading: false });
  }

  render() {
    const { loading, info } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = info;
    return (
      loading
        ? <Loading />
        : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Title: ${title}` }</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <Link to="/">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          </div>
        )
    );
  }
}

MovieDetails.propTypes = {
  match: shape({
    params: shape({
      id: number,
    }),
  }).isRequired,
};

export default MovieDetails;
