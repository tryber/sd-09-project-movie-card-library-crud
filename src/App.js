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
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route path="/movies/new" render={ () => <NewMovie /> } />
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route path="*" render={ () => <NotFound /> } />
      </Switch>
    </Router>
  );
}

export default App;
