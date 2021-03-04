import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then(
      (getMovie) => this.setState({ movies: getMovie, loading: false })
    );
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div>
        <Header />
        <section className="main-content">
          {loading ? <Loading /> : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </section>
        <Footer />
      </div>
    );
  }
}

export default MovieList;
