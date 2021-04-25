import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    return this.fetchMovieList();
  }

  async fetchMovieList() {
    const movies = await movieAPI.getMovies()
      .then((res) => res)
      .catch((err) => {
        console.log(err);
        return ['Error fetching movie list'];
      });
    this.setState({ movies, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {
          loading
            ? <Loading />
            : (
              <main>
                <Link to="/movies/new">ADICIONAR CARTÃO</Link>
                {
                  movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
                }
              </main>
            )
        }
      </div>
    );
  }
}

export default MovieList;
