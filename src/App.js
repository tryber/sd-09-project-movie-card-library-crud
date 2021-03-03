import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import NewMovie from './pages/NewMovie';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route component={ NotFound } />
        </Switch>
        <div>Movie Card Library CRUD</div>
      </Router>
    );
  }
}

export default App;
