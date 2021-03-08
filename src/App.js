import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <section>
        <Route path="/" Component={ MovieList } />
        <Route path="/movies/:id" Component={ MovieDetails } />
        <Route path="/movies/new" Component={ NewMovie } />
        <Route path="/movies/:id/edit" Component={ EditMovie } />
        <Route path="/" Component={ MovieList } />
        <Route Component={ NotFound } />
      </section>
    </BrowserRouter>
  );
}

export default App;
