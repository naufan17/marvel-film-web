import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GuestRoute from './GuestRoute';
import ProtectRoute from './ProtectRoute';
import Home from "../pages/Home";
import DetailMovie from '../pages/DetailMovie';
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Dashboard from "../pages/Dashboard";
import CreateMovie from "../pages/CreateMovie";
import NotFound from "../pages/NotFound";

const AppRoute: React.FC = () => {    
  return (
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/:id'} element={<DetailMovie/>}/>
      <Route path={'/login'} element={<GuestRoute><Login/></GuestRoute>}/>
      <Route path={'/dashboard'} element={<ProtectRoute><Dashboard/></ProtectRoute>}/>
      <Route path={'/create'} element={<ProtectRoute><CreateMovie/></ProtectRoute>}/>
      <Route path={'/logout'} element={<ProtectRoute><Logout/></ProtectRoute>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default AppRoute;