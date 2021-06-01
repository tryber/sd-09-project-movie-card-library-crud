import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      Loading: false,
    };
  }
  componentDidMount(){
    this.puhMovies();
  }

  pushMovies(){
    this.setState({ Loading: true}, async() => {
      const movieListgeted = await movieAPI.getMovies();
      this.setState({  movies: movieListgeted, Loading: false});
    });
  }

  render() {
    const { movies, Loading } = this.state;
    return(
      <>
        <div data-testid="movie-list">
          {Loading 
            ? <Loading />
            :movies.map((movie) => <MovieCard key={movie.title} movie={movie} />,
            )
          }
        </div>
        <Link to="/movies/new" >Adicionar Cartão</Link>  
      </>
    );
  }
}

export default MovieList;
