import React from 'react';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/movies/:id/edit" component={ EditMovie }></Route>
        <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props}/> }></Route>
        <Route exact path="/movies/new" component={ NewMovie }></Route>
        <Route exact path="/" component={ MovieList }></Route>
        <Route path="*" component={ NotFound }></Route>
      </switch>
    </BrowserRouter>
  );
}

export default App;
