import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated, getCurrentRole } from './authUtils';

interface ProtectedRouteProps {
  requiredRole?: 'employee' | 'manager' | 'founder';
}

export const ProtectedRoute = ({ requiredRole }: ProtectedRouteProps) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  const role = getCurrentRole();
  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
