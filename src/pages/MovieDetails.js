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

  renderCard(){
    const{title, storyline, imagePath, genre, rating, subtitle } = this.state;
    const { match: { params } } = this.props;
    const { id } = params;

    return(    
    <div>
      <img alt="Movie Cover" src={ `../${imagePath}` }/>
      <h4>{ `Title: ${title}` }</h4>
      <h5>{ `Subtitle: ${subtitle}` }</h5>
      <p>{ `Storyline: ${storyline}` }</p>
      <p>{ `Genre: ${genre}` }</p>
      <div>
        <span>
          { `Rating: ${rating}` }
        </span>
      </div>
      <Link to="/">VOLTAR</Link>
      <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
    </div>
    )
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Header />
        <section>
          {loading ? <Loading /> : this.renderCard()}
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
