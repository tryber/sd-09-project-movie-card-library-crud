import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movielist from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>
        Movie Card Library CRUD
      </div>
      <Switch>
        <Route exact path="/" component={ Movielist } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
