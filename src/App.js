import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter >
      <Switch >
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/new" component={ NewMovie } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
