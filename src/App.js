import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';
import NewMovies from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovies } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
