import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovie().then((data) => {
      this.setState({
        movies: data,
        loading: true,
      });
    });
  }
  // REQUISIÇÃO QEU VAI BUSCAR FILME QUE VAI SER RENDERIZADO

  // AO SER MONTADO DEVE FAZER UMA REQUISIÇÃO USANDO A FUNÇÃO GETMOVIE DO MOVIEAPI
  // Change the condition to check the state
  // O componente loading vai ser renderizado enquanto a
  // requisição estiver em curso. Após terminar deve renderizar um card
  // if (true) return <Loading />;
  render() {
    const { storyline, imagePath, genre, rating, subtitle, title } = {};
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link onClick={ this.deleteMovie } to="/">DELETAR</Link>
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
