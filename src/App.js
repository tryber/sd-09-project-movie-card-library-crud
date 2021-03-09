import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>Movie Card Library CRUD</div>
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path='/' component={ MovieList } />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/* Source 1 : Scrimba (https://scrimba.com/learn/learnreact)*/
/* Source 2 : Rocketseat (https://nextlevelweek.com/)*/
/* Source 3: Caily.dev (https://daily.dev)*/
