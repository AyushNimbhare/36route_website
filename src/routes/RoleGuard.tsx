import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { hasPermission } from '../constants/permissions';

interface RoleGuardProps {
  children: React.ReactNode;
}

export const RoleGuard: React.FC<RoleGuardProps> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (user && !hasPermission(user.role, location.pathname)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};
