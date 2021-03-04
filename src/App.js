import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Movelist from './pages/MovieList'
import MovieDetails from './pages/MovieDetails';
import NemMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';


function App() {
  return (
    <BrowserRouter>
      <div>
        <p>Movie Card Library CRUD</p>
        <Route path="/" component={ Movelist } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NemMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
      </div>
    </BrowserRouter>
  );
}
export default App;
