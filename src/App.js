import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { EditMovie, MovieDetails, NewMovie, MovieList, NotFound } from './pages/index';

function App() {
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
        {/* https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
