import { User, UserRole } from '../types';
import { MOCK_USERS } from '../data/mockData';

const AUTH_STORAGE_KEY = '36route_auth_user';

export const authService = {
  getCurrentUser(): User | null {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse auth user', e);
      }
    }
    return MOCK_USERS[0]; // Default to Admin
  },

  login(email: string, role?: UserRole): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const found = MOCK_USERS.find(u => u.email.toLowerCase() === email.toLowerCase() || u.role === role);
        const userToLogin = found || {
          id: `usr-${Date.now()}`,
          name: email.split('@')[0].replace('.', ' '),
          email,
          role: role || 'ADMIN',
          department: 'Management'
        };
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userToLogin));
        resolve(userToLogin);
      }, 400);
    });
  },

  loginAsRole(role: UserRole): Promise<User> {
    const matchedUser = MOCK_USERS.find(u => u.role === role) || {
      ...MOCK_USERS[0],
      role,
      name: `${role.replace('_', ' ')} Demo User`
    };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(matchedUser));
    return Promise.resolve(matchedUser);
  },

  logout(): Promise<void> {
    return new Promise((resolve) => {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      resolve();
    });
  }
};
