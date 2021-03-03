import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route exact path="/" component={ MovieList } />
      <Route exact path="/movies/:id" component={ MovieDetails } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" exact component={ EditMovie } />
      <Route path="/" component={ NotFound } />
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
    </BrowserRouter>
  );
}

export default App;
