import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetails";
import NewMovie from "./pages/NewMovie";
import EditMovie from "./pages/EditMovie";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/:id" component={ MovieDetail } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
