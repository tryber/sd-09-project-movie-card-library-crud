import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components/index.js';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.handleLoading = this.handleLoading.bind(this);

    this.state = {
      movies: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchCards();
  }

  handleLoading() {
    return this.state.isLoading && <Loading />;
  }

  fetchCards() {
    this.setState({ isLoading: true },
      async () => {
        const arrayMovies = await getMovies();
        this.setState({ movies: arrayMovies, isLoading: false });
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list" className="movie-list">
        { this.handleLoading() }
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <div>
          <Link className="det-button" to="/movies/new"> ADICIONAR CARTÃO </Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
