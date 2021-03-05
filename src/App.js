import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Redirect to="/notfound" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
