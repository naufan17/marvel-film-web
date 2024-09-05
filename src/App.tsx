import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import GuestRoute from './routes/GuestRoute';
import ProtectRoute from './routes/ProtectRoute';
import Home from "./pages/Home";
import DetailMovie from './pages/DetailMovie';
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import CreateMovie from "./pages/CreateMovie";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/:id'} element={<DetailMovie/>}/>
          <Route path={'/login'} element={<GuestRoute><Login/></GuestRoute>}/>
          <Route path={'/dashboard'} element={<ProtectRoute><Dashboard/></ProtectRoute>}/>
          <Route path={'/create'} element={<ProtectRoute><CreateMovie/></ProtectRoute>}/>
          <Route path={'/logout'} element={<ProtectRoute><Logout/></ProtectRoute>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;