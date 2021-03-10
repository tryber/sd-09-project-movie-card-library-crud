/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
    this.showMovieItems = this.showMovieItems.bind(this);
    this.state = {
      movie: {},
      LoadingState: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const position = Number(match.params.id);
    movieAPI.getMovie(position).then((eachMovie) => {
      this.setState({
        movie: eachMovie,
        LoadingState: false,
      });
    });
  }

  delete() {
    const { match } = this.props;
    movieAPI.deleteMovie(Number(match.params.id));
  }

  showMovieItems() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }

  render() {
    const { LoadingState, movie } = this.state;
    // o lint foi desabilitado no arquivo para a regra de identação e alinhamento entre tag de abertura e fechamento
    // por causa do conflito na div da linha 66;
    return (
      <div>
        {LoadingState ? <Loading />
          : <div data-testid="movie-details">
            {this.showMovieItems()}
            <button type="button">
              <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
            </button>
            <button type="button"><Link to="/">VOLTAR</Link></button>
            <button type="button" onClick={ this.delete }>
              <Link to="/">DELETAR</Link>
            </button>
          </div>}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.number.isRequired,
};

export default MovieDetails;
