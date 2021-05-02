import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="" component={ NotFound } />
        {/* https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
