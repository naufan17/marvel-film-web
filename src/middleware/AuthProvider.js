import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAccessToken({ token });
        }
      }, []);

    const login = (token) => {
        sessionStorage.setItem('accessToken', token);
        setAccessToken(token);
        navigate('/marvel-film-web/dashboard');
    };

    const logout = () => {
        sessionStorage.removeItem('accessToken');
        setAccessToken(null);
        navigate('/marvel-film-web/login');
    };

    return (
        <AuthContext.Provider value={{ accessToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    React.useContext(AuthContext)
};