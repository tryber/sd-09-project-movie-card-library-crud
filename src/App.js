import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route
            path="/movies/:id"
            render={ (props) => (<MovieDetails { ...props } />) }
          />
          <Route exact path="/" component={ MovieList } />
          <Route path="*" component={ NotFound } />
        </Switch>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
