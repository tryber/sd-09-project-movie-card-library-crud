import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      isLoading : true,
      movie : undefined
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then(movie => {
      this.setState({movie, isLoading : false});
    });
  }

  deleteMovie(id) {
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state

    if(this.state.isLoading) 
      return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={`/movies/${id}/edit`}>
          EDITAR
        </Link>
        <br />
        <Link to='/'>
          VOLTAR
        </Link>
        <br />
        <Link to='' onClick={() => this.deleteMovie(id)}>
          DELETAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;
