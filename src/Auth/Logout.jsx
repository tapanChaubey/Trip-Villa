import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { AuthContext } from "../context";
import { useNavigate } from 'react-router-dom';
export const Logout = () => {
    const { setUser } = React.useContext(AuthContext);
    const navigate = useNavigate();

    React.useEffect(() => {
        const logout = async () => {
            // Perform logout logic here (e.g., API call)
            setUser(null);
            navigate('/');
        };
        logout();
    }, [setUser, navigate]);

    return null; // Or a loading spinner
};