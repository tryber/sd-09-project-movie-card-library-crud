import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { MovieDetails, MovieList, EditMovie, NewMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/movies/new"> ADICIONAR CARTÃO </Link>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
