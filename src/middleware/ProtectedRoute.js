import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import isAuthenticated from './Authenticated';
// import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
    const user = isAuthenticated();
    if (!user) {
        return <Navigate to="/marvel-film-web/login"/>;
    }
    return children;
};

// const ProtectedRoute = ({ component: Component, ...rest }) => {
    // const { accessToken } = useAuth();
  
    // return (
    //     <Route
    //         {...rest}
    //         render={(props) =>
    //             accessToken ? <Component {...props} /> : <Navigate to="/login" />
    //         }
    //     />
        // <Route
        //     {...rest}
        //     element={accessToken ? <Component /> : <Navigate to="/marvel-film-web/login" />}
        // />
//     );
// };

export default ProtectedRoute;