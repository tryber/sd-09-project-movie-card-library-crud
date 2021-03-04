import React from 'react';
import PropTypes from 'prop-types';
import './MovieForm.css';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    const { movie } = this.props;
    this.state = { ...movie };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title">
        Título
        <input
          id="title"
          name="title"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle">
        Subtítulo
        <input
          id="subtitle"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderImagePath() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagePath">
        Imagem
        <input
          id="imagePath"
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderStoryLine() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline">
        Sinopse
        <textarea
          id="storyline"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select
          id="genre"
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating">
        Avaliação
        <input
          id="rating"
          name="rating"
          type="number"
          step={ 0.1 }
          min={ 0 }
          max={ 5 }
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    return (
      <main className="form-container">
        <form className="form">
          { this.renderTitle() }
          { this.renderSubtitle() }
          { this.renderImagePath() }
          { this.renderStoryLine() }
          { this.renderGenre() }
          { this.renderRating() }
          <button
            type="button"
            onClick={ this.handleSubmit }
          >
            Submit
          </button>
        </form>
      </main>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
