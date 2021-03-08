import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      id: ''
    }
    console.log(props)
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    movieAPI.getMovie(id).then((response) => this.setState({ movie: response, id: id, }));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    console.log(this.state.movie);
    if(title === undefined) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{title}</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={`/movies/${this.state.id}/edit`} >EDITAR</Link>
        <Link to='/' >VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
