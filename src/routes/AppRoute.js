import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Login from "../pages/Login";
import CreateMovie from "../pages/CreateMovie";

export default function HomeRoute() {
    const URL = "marvel-film-web"
    
    return (
        <Routes>
            <Route path={URL} Component={Home}/>
            <Route path={URL + '/:id'} Component={Movie}/>
            <Route path={URL + '/login'} Component={Login}/>
            <Route path={URL + '/create-movie'} Component={CreateMovie}/>
        </Routes>
    );
}