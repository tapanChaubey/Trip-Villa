import React from 'react';
import { createContext, useEffect,useState } from "react";
export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState([]);

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
  const cartItems1 = (cartCount) => {
    setCartCount(cartCount);
  };
  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, cartItems1, cartCount, wishlist, addToWishlist }}>
      {children}
    </AuthContext.Provider>
  );
};
