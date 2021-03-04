import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route exact path="/movies/:id" render={ () => <MovieDetails /> } />
        <Route id="new-movie" exact path="/movies/new" render={ () => <NewMovie /> } />
        <Route exact path="/movies/:id/edit" render={ () => <EditMovie /> } />
        <Route path="*" render={ () => <NotFound /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
