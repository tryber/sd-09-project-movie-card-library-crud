import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './pages/NotFound';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route exact path="/" component={ MovieList } />
        <Route path="" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
