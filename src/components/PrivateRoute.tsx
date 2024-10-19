// src/components/PrivateRoute.tsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

interface PrivateRouteProps {
    children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { currentUser, loading } = useAuth();

    if (loading) {
        // You can replace this with a spinner or loading indicator
        return <div>Loading...</div>;
    }

    return currentUser ? children : <Navigate to="/" />;
};

export default PrivateRoute;
