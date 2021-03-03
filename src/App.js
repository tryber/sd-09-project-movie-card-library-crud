import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';
import Movies from './services/movieData';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
        <Route path="/movies/new" render={ () => <NewMovie /> } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route path="/" render={ () => <NotFound /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
