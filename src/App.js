import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MovieList />
        <MovieDetails />
        <NewMovie />
        <EditMovie />
        <NotFound />
      </BrowserRouter>
    );
  }
}

export default App;
