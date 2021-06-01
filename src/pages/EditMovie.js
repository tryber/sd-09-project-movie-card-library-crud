import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    const { id: movieId } = props.match.params;

    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: {},
      movieId,
    };
  }

  async componentWillMount() {
    const { movieId } = this.state;
    const { getMovie } = movieAPI;
    const movieResp = await getMovie(movieId);
    this.setState({
      loading: false,
      shouldRedirect: false,
      movie: movieResp,
    });
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    const movieNewState = await updateMovie(updatedMovie);
    this.setState({
      loading: false,
      shouldRedirect: true,
      movie: movieNewState,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if ('loading') {
      return<Loading />
    }

    return (
      
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
