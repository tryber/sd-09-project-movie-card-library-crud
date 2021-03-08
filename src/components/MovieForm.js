/* eslint-disable max-lines-per-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

class MovieForm extends React.Component {
  constructor(state) {
    super(state);
    const { movie } = this.props;
    this.state = {
      title: movie ? movie.title : '',
      subtitle: movie ? movie.subtitle : '',
      storyline: movie ? movie.storyline : '',
      genre: movie ? movie.genre : '',
      rating: movie ? movie.rating : '',
      imagePath: movie ? movie.imagePath : '',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
    this.renderTitleInput = this.renderTitleInput.bind(this);
    this.renderSubtitleInput = this.renderSubtitleInput.bind(this);
    this.renderImagePathInput = this.renderImagePathInput.bind(this);
    this.renderStorylineInput = this.renderStorylineInput.bind(this);
    this.renderGenreSelection = this.renderGenreSelection.bind(this);
    this.renderRatingInput = this.renderRatingInput.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
  }

  async handleSubmit() {
    const { onSubmit } = this.props;
    await onSubmit(this.state);
    this.setState({ shouldRedirect: true });
  }

  updateMovie(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div>
        <label htmlFor="movie_title">
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate"
            value={ title }
            name="title"
            onChange={ this.updateMovie }
          />
          Título
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div>
        <label htmlFor="movie_subtitle">
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            value={ subtitle }
            name="subtitle"
            onChange={ this.updateMovie }
          />
          Subtítulo
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_image">
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            value={ imagePath }
            name="imagePath"
            onChange={ this.updateMovie }
          />
          Imagem
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div>
        <label htmlFor="movie_storyline">
          <textarea
            id="movie_storyline"
            value={ storyline }
            name="storyline"
            onChange={ this.updateMovie }
          />
          Sinopse
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div>
        <label htmlFor="movie_genre">
          Gênero
          <select
            id="movie_genre"
            value={ genre }
            name="genre"
            onChange={ this.updateMovie }
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div>
        <label htmlFor="movie_rating">
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            onChange={ this.updateMovie }
          />
          Avaliação
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movie: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieForm;
