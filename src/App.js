import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ MovieList } />
      <Route path="/Movies/:id" component={ MovieDetails } />
      <Route path="/Movies/new" component={ NewMovie } />
      <Route path="/Movies/:id/edit" component={ EditMovie } />
      <Route path="*" component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;