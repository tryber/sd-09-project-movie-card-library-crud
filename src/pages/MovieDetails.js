import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super()

    this.state = {
      movie: [],
      loading: true,
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    movieAPI.getMovie(id).then(response => {
      this.setState({
        movie: response,
        loading: false,
        linkID: id,
      })
    })

  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { loading, linkID } = this.state;
    
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `Title: ${title}` }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button"><Link to='/'>VOLTAR</Link></button>
        <button type="button"><Link to={ `/movies/${linkID}/edit` }>EDITAR</Link></button>
        <button
          type="button"
          onClick={ () => movieAPI.deleteMovie(linkID) }
        >
          <Link to="/">DELETAR</Link>
        </button>
      </div>
    );
  }
}

export default MovieDetails;
