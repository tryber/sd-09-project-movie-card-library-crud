import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ MovieList } />
      <div>Movie Card Library CRUD</div>
    </BrowserRouter>
  );
}

export default App;
