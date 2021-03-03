import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Movie List</Link>
      <Link to="/movies/:id">Movie Details</Link>
      <Link to="/movies/new">New Movie</Link>
      <Link to="/movies/:id/edit">Edit Movie</Link>

      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/404" component={ NotFound } />
        <Route exact path="/" component={ MovieList } />
        <Redirect from="*" to="/404" />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
