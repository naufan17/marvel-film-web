import React, { createContext, useState, ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { loginApi, logoutApi } from "../api/AuthApi";

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const token = await loginApi(email, password);
      sessionStorage.setItem('token', token);
      setIsAuthenticated(true);
      navigate('/dashboard');
    } catch (error) {
      throw new Error('User not found'); 
    }
  }

  const logout = async () => {
    try {
      await logoutApi();
      sessionStorage.removeItem('token');
      setIsAuthenticated(false);
      navigate('/');
    } catch (error) {
      throw new Error('Failed to logout');
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}