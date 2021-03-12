import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.getMovie = this.getMovie.bind(this);
    this.renderizando = this.renderizando.bind(this);
    this.state = {
      movie: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    this.setState(
      { isLoading: true }, // carregando
      async () => {
        const { match } = this.props;
        try {
          this.setState({
            movie: await movieAPI.getMovie(match.params.id), // buscando os dados
            isLoading: false, // deletando o carregamento
          });
        } catch (error) {
          console.log(error);
        }
      },
    );
  }

  renderizando() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}`}</p>
        <p>{ `Storyline: ${storyline}`}</p>
        <p>{ `Genre: ${genre}`}</p>
        <p>{ `Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : this.renderizando();
    // caso is loading for false executa a função renderizando
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  match: PropTypes.shape({
    params: propTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
