import React from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';
import movieData from '../services/movieData';
import * as movieAPI from '../services/movieAPI';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      storyline: '',
      // id:
    };
    // this.renderCard = this.renderCard.bind(this);
  }

  async fetchMovies() {
    const movieTitle = await movieAPI.getMovies().title;
    const movieStoryLine = await movieAPI.getMovies().storyline;
    this.setState({
      title: movieTitle,
      storyline: movieStoryLine,
    });
  }

  render() {
    const { title, storyline } = this.state;
    return (
      <div data-testid="movie-card">
        {console.log(movieData.length)}
        <span>{title}</span>
        <span>{storyline}</span>
        {/* Movie Card */}
        <Link href="/movies/:id" component={ MovieDetails }>VER DETALHES</Link>
        <Link href="/movies/:id">VER DETALHES2</Link>
      </div>
    );
  }
}

export default MovieCard;
