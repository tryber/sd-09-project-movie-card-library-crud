import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import * as movieAPI from '../services/movieAPI';
import './moviedetails.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      imagePath: '',
      title: '',
      subtitle: '',
      storyline: '',
      genre: '',
      rating: 0,
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const { id } = params;
    movieAPI.getMovie(id).then(
      (fetchMovie) => {
        const { title, subtitle, storyline, rating, imagePath, genre } = fetchMovie;
        console.log(fetchMovie);
        this.setState({
          title,
          subtitle,
          storyline,
          rating,
          imagePath,
          genre,
          loading: false,
        });
      },
    );
  }

  DetailsRender() {
    const { match: { params } } = this.props;
    const { id } = params;
    const {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre
    } = this.state;
    return (
      <div className="
        movie-card-body-details 
        movie-card hvr-underline-reveal
        hvr-grow">
        <img className="movie-card-image-details"
          alt="Movie Cover"
          src={ `../${imagePath}` }
        />
        <h4 className="movie-card-title-details">{ `Title: ${title}` }</h4>
        <h5 className="movie-card-subtitle-details">{ `Subtitle: ${subtitle}` }</h5>
        <p className="movie-card-storyline-details">{ `Storyline: ${storyline}` }</p>
        <p className="movie-genre-details">
          { `Genre: ${genre}` }
        </p>
        <div className="movie-card-rating-details">
          <span className="rating movie-card-rating-span-details">
            { `Rating: ${rating}` }
          </span>
        </div>
        <Link to="/" className="button-home">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` } className="button-edit">EDITAR</Link>
    </div>
    );
  }

  render() {
    const { loading } = this.state

    return (
      <div>
        <Header />
        <section className="main-content-details">
          {loading ? <Loading /> : this.DetailsRender()}
        </section>
        <Footer />
      </div>
    );
  }
}

export default MovieDetails;
