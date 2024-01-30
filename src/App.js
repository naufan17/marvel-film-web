import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Movie from "./pages/Movie";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="marvel-film-web" Component={Home}/>
        <Route path="marvel-film-web/:id" Component={Movie}/>
      </Routes>
    </Router>
  );
}