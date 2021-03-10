import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as index from './pages/index';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ index.MovieList } />
        <Route path="/movies/new" component={ index.NewMovie } />
        <Route path="/movies/:id/edit" component={ index.EditMovie } />
        <Route path="/movies/:id" component={ index.MovieDetails } />
        <Route path="*" component={ index.NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
