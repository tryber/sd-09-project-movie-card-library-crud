import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  MovieList,
  MovieDetails,
  NewMovie,
  EditMovie,
  NotFound,
} from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ MovieList } />
        <Route path='/movies/new' component={ NewMovie } />
        <Route path='/movies/:id/edit' render={ (props) => <EditMovie { ...props } /> } />
        <Route path='/movies/:id' render={ (props) => <MovieDetails { ...props } /> } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
