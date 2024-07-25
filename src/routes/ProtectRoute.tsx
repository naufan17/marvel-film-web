import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/UseAuth';

interface ProtectRouteProps {
  children: ReactNode;
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login"/>;
  }

  return <>{children}</>;
};

export default ProtectRoute;