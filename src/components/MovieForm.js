import React from 'react';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      genre: '',
      rating: 0,
    };
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
      <main>
        <form>
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
