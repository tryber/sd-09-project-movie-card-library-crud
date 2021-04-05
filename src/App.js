import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <div><Link to="/movies/new">ADICIONAR CARTÃO</Link></div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}
