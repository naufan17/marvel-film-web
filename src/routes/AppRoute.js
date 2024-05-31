import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../middleware/ProtectedRoute';
import isAuthenticated from '../middleware/Authenticated';
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Dashboard from "../pages/Dashboard";
import NewData from "../pages/NewData";
import EditData from "../pages/EditData";
import NotFound from "../pages/NotFound";

export default function AppRoute() {    
    const URL = "marvel-film-web"
    
    return (
        <Routes>
            <Route path={URL} Component={Home}/>
            <Route path={URL + '/:id'} Component={Movie}/>
            <Route path={URL + '/login'} element={isAuthenticated() ? <Navigate to="/marvel-film-web/dashboard"/> : <Login />}/>
            <Route path={URL + '/dashboard'} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            <Route path={URL + '/create'} element={<ProtectedRoute><NewData/></ProtectedRoute>}/>
            <Route path={URL + '/edit/:id'} element={<ProtectedRoute><EditData/></ProtectedRoute>}/>
            <Route path={URL + '/logout'} element={<ProtectedRoute><Logout/></ProtectedRoute>}/>
            <Route path={URL + '/404'} Component={NotFound}/>
            <Route path="*" element={<Navigate to="/marvel-film-web/404"/>}/>
        </Routes>
    );
}