import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

{/* <div>Movie Card Library CRUD</div> */}
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={ MovieList} />
        <Route path="/movies/:id" render={ MovieDetails } />
        <Route path="/movies/new" render={ NewMovie } />
        <Route path="/movies/:id/edit" render={ EditMovie } />
        <Route path="" render={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
