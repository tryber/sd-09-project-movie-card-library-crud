import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <div>Movie Card Library CRUD</div>
        <Router>
          <Switch>
            <Route exact path="/" component={ MovieList } />
            <Route path="/movies/new" component={ NewMovie } />
            <Route exact path="/movies/:id" component={ MovieDetails } />
            <Route path="/movies/:id/edit" component={ EditMovie } />
            <Route component={ NotFound } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
