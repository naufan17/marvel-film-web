import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Movie from "./pages/Movie";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="movie" Component={Home}/>
        <Route path="movie/:id" Component={Movie}/>
      </Routes>
    </Router>
  );
}