import React, { createContext, useState, useEffect } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    login: (token: string) => { },
    logout: () => { }
});

type AuthProviderProps = {
    children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    console.log("asd");

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const login = (token: string) => {
        console.log('Login function called');
        localStorage.setItem('authToken', token);
        setIsLoggedIn(true);
        console.log('isLoggedIn set to true');
    };

    const logout = () => {
        console.log('Logout function called');
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        console.log('isLoggedIn set to false');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};