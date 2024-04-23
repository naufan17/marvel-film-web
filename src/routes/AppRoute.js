import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import isAuthenticated from '../middleware/Authenticated';
import ProtectedRoute from '../middleware/ProtectedRoute';
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Form from "../pages/Form";
import NotFound from "../pages/NotFound";

export default function AppRoute() {    
    const URL = "marvel-film-web"
    
    return (
        <Routes>
            <Route path={URL} Component={Home}/>
            <Route path={URL + '/:id'} Component={Movie}/>
            <Route path={URL + '/login'} element={isAuthenticated() ? <Navigate to="/marvel-film-web/dashboard"/> : <Login />}/>
            <Route path={URL + '/dashboard'} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            <Route path={URL + '/create'} element={<ProtectedRoute><Form/></ProtectedRoute>}/>
            <Route path={URL + '/edit'} element={<ProtectedRoute><Form/></ProtectedRoute>}/>
            <Route path={URL + '/404'} Component={NotFound}/>
            <Route path="*" element={<Navigate to="/marvel-film-web/404"/>}/>
        </Routes>
    );
}