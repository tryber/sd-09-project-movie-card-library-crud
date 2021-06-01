import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route exact path="/" component={MovieList} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);
}