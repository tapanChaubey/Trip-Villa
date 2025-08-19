import React from 'react';
import { createContext, useEffect,useState } from "react";
export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const login = (email, password) => {
    const userData = { email, password };
    setUser(userData);
  };

  const signup = (email, password) => {
    const userData = { email, password };
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
