import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
