import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, EditMovie, MovieDetails, NewMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ MovieList } />
        <Route path="/movies/new" exact component={ NewMovie } />
        <Route path="/movies/:id" exact component={ MovieDetails } />
        <Route path="/movies/:id/edit" exact component={ EditMovie } />
        <Route exact component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
