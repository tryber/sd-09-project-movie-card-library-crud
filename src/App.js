import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Movelist from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NemMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Movelist } />
          <Route path="/movies/new" component={ NemMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>

  );
}
export default App;
