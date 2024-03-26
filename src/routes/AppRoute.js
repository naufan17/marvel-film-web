import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Login from "../pages/Login";

export default function HomeRoute() {
    return (
        <Routes>
            <Route path="marvel-film-web" Component={Home}/>
            <Route path="marvel-film-web/:id" Component={Movie}/>
            <Route path="marvel-film-web/login" Component={Login}/>
        </Routes>
    );
}