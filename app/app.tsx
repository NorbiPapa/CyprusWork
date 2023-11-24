use client;

import React, { createContext, useState, useEffect, use } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
  });

  type AuthProviderProps = {
    children: React.ReactNode;
  };
  
  export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (token) {
        setIsLoggedIn(true);
      }
    }, []);
  
    const login = () => {
      localStorage.setItem('authToken', 'your-token');
      setIsLoggedIn(true);
    };
  
    const logout = () => {
      localStorage.removeItem('authToken');
      setIsLoggedIn(false);
    };
  
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
        </AuthContext.Provider>
    );      
  };
  