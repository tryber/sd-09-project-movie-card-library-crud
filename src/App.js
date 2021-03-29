import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ MovieList } />
      <Route path="/Movies/:id" component={ MovieDetails } />
      <Route path="/Movies/new" component={ NewMovie } />
      <Route path="/Movies/:id/edit" component={ EditMovie } />
      <Route path="*" component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
