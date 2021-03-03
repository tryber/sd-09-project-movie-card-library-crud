import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, NewMovie, MovieList, NotFound } from './pages/index';

import './App.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route path="/" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
