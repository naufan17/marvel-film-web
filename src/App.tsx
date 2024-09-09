import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import GuestRoute from './routes/GuestRoute';
import ProtectRoute from './routes/ProtectRoute';
import Home from "./pages/home";
import DetailMovie from './pages/detailMovie';
import Login from "./pages/login";
import Logout from "./pages/logout";
import Dashboard from "./pages/dashboard";
import CreateMovie from "./pages/createMovie";
import NotFound from "./pages/notFound";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:id' element={<DetailMovie/>}/>
          <Route path='/login' element={<GuestRoute><Login/></GuestRoute>}/>
          <Route path='/dashboard' element={<ProtectRoute><Dashboard/></ProtectRoute>}/>
          <Route path='/create' element={<ProtectRoute><CreateMovie/></ProtectRoute>}/>
          <Route path='/logout' element={<ProtectRoute><Logout/></ProtectRoute>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;