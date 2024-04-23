import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import isAuthenticated from '../middleware/Authenticated';
import ProtectedRoute from '../middleware/ProtectedRoute';
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Login from "../pages/Login";
import CreateMovie from "../pages/CreateMovie";

export default function AppRoute() {    
    const URL = "marvel-film-web"
    
    return (
        <Routes>
            <Route path={URL} Component={Home}/>
            <Route path={URL + '/:id'} Component={Movie}/>
            <Route path={URL + '/login'} element={isAuthenticated() ? <Navigate to="/marvel-film-web/create-movie" /> : <Login />}/>
            <Route path={URL + '/create-movie'} element={<ProtectedRoute><CreateMovie/></ProtectedRoute>}/>
        </Routes>
    );
}