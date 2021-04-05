import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const { getMovies } = movieAPI;
    const data = await getMovies();
    this.setState({
      movies: data,
    });
  }

  render() {
    const { movies } = this.state;
    const moviesRender = movies.map((movie) => (
      <MovieCard key={ movie.title } movie={ movie } />
    ));

    return (
      <div data-testid="movie-list">
        { movies.length > 0 ? moviesRender : <Loading /> }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
