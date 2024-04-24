import React from 'react';
import { Navigate } from 'react-router-dom';

import isAuthenticated from './Authenticated';

const ProtectedRoute = ({ children }) => {
    const user = isAuthenticated();
    if (!user) {
        return <Navigate to="/marvel-film-web/login"/>;
    }
    return children;
};

export default ProtectedRoute;