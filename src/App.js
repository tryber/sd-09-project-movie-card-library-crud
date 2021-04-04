import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="*" component={ NotFound } />
        <Route exact path="/" component={ MovieList } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
