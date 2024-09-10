import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth(); // Use the authentication hook

    // Show a loading state while checking authentication
    if (loading) {
        return <div>Loading...</div>;
    }

    // Redirect to the home page if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children; // Render the protected component if authenticated
};

export default ProtectedRoute;