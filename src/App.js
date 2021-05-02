import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/" component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
    </BrowserRouter>
  );
}

export default App;
