import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      imagePath: '',
      title: '',
      subtitle: '',
      storyline: '',
      genre: '',
      rating: 0,
      loading: true,
    };

    // this.renderMovies = this.renderMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const item = await movieAPI.getMovie();
    // console.log(item[0]);
    this.setState({
      title: item,
      loading: false,
    });
  }

  renderMovies() {
    const { movie: movieList } = this.state;
    return console.log(movieList);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, loading } = this.state;

    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : this.renderMovies() }
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link href="/movies/:id/edit">EDITAR</Link>
        <Link href="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
