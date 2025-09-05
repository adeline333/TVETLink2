import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'student' | 'private-sector' | 'admin';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    // Redirect to appropriate dashboard based on user's actual role
    if (user?.role === 'student') {
      return <Navigate to="/student-dashboard" replace />;
    } else if (user?.role === 'private-sector') {
      return <Navigate to="/private-sector-dashboard" replace />;
    } else if (user?.role === 'admin') {
      return <Navigate to="/admin-dashboard" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
