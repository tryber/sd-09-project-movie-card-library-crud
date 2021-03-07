import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
      id: this.props.match.params.id

    }
    this.showMovie = this.showMovie.bind(this);
  }

  async fetchMovie() {
    this.setState(
      { loading: true },

      async () => {
        let { id } = this.state;
        const requestMovie = await movieAPI.getMovie(id);
        this.setState({
          movie: requestMovie,
          loading: false,
    
        });
      }
    );
  }
  componentDidMount() {
    this.fetchMovie()
  }

  showMovie() {
    const { movie } = this.state;
    const { storyline, imagePath, genre, rating, subtitle } = movie ;

    return (
      <div data-testid="movie-details">
      <img alt="Movie Cover" src={ `../${ imagePath }` } />
      <p>{ `Subtitle: ${ subtitle }` }</p>
      <p>{ `Storyline: ${ storyline }` }</p>
      <p>{ `Genre: ${ genre }` }</p>
      <p>{ `Rating: ${ rating }` }</p>
    </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading } = this.state;
    return (loading ? <Loading /> : this.showMovie() );
  }
}

export default MovieDetails;
