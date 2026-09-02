import { UserRole } from '../types';

export const ROLE_LABELS: Record<UserRole, string> = {
  ADMIN: 'System Admin',
  TRANSPORT_MANAGER: 'Transport Manager',
  HR: 'HR Manager',
  CONTROL_ROOM: 'Control Room Operator',
  DRIVER: 'Driver',
  EMPLOYEE: 'Employee'
};

export const ROUTE_PERMISSIONS: Record<string, UserRole[]> = {
  '/dashboard': ['ADMIN', 'TRANSPORT_MANAGER', 'HR', 'CONTROL_ROOM'],
  '/tracking': ['ADMIN', 'TRANSPORT_MANAGER', 'CONTROL_ROOM'],
  '/routes': ['ADMIN', 'TRANSPORT_MANAGER'],
  '/trips': ['ADMIN', 'TRANSPORT_MANAGER', 'CONTROL_ROOM'],
  '/employees': ['ADMIN', 'TRANSPORT_MANAGER', 'HR'],
  '/drivers': ['ADMIN', 'TRANSPORT_MANAGER', 'CONTROL_ROOM'],
  '/vehicles': ['ADMIN', 'TRANSPORT_MANAGER', 'CONTROL_ROOM'],
  '/schedules': ['ADMIN', 'TRANSPORT_MANAGER', 'HR'],
  '/attendance': ['ADMIN', 'TRANSPORT_MANAGER', 'HR'],
  '/safety': ['ADMIN', 'TRANSPORT_MANAGER', 'CONTROL_ROOM'],
  '/reports': ['ADMIN', 'TRANSPORT_MANAGER', 'HR'],
  '/notifications': ['ADMIN', 'TRANSPORT_MANAGER', 'HR', 'CONTROL_ROOM'],
  '/settings': ['ADMIN', 'TRANSPORT_MANAGER']
};

export function hasPermission(role: UserRole, path: string): boolean {
  const allowedRoles = ROUTE_PERMISSIONS[path];
  if (!allowedRoles) return true;
  return allowedRoles.includes(role);
}
