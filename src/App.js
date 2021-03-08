import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
