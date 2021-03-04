import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
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

  render() {
    const { 
      loading, 
      title, 
      storyline, 
      imagePath, 
      genre, 
      rating, 
      subtitle } = this.state;
    const { match: { params } } = this.props;
    const { id } = params;

    return (
      <div>
        <Header />
        <section className="main-content-details">
          {loading ? <Loading /> 
          : <div
              className="
              moviebody
              movie-card
              hvr-underline-reveal
              hvr-grow"
            >
              <img
                className="movie-card-image-details"
                alt="Movie Cover"
                src={ `../${imagePath}` }
              />
              <h4 className="movietitle">{ `Title: ${title}` }</h4>
              <h5 className="moviesubtitle">{ `Subtitle: ${subtitle}` }</h5>
              <p className="moviestoryline">{ `Storyline: ${storyline}` }</p>
              <p className="moviegenre">
                { `Genre: ${genre}` }
              </p>
              <div className="movierating">
                <span className="movieratingspan">
                  { `Rating: ${rating}` }
              </span>
              </div>
              <Link to="/" className="button-home">VOLTAR</Link>
              <Link to={ `/movies/${id}/edit` } className="button-edit">EDITAR</Link>
            </div>
          }
        </section>
        <Footer />
      </div>
    );
  }
}
MovieDetails.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
