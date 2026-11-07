import { User } from './authTypes';

const SESSION_KEY = 'mint_auth_session';

export const setSession = (user: User) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
};

export const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const getCurrentUser = (): User | null => {
  const session = localStorage.getItem(SESSION_KEY);
  if (!session) return null;
  try {
    return JSON.parse(session) as User;
  } catch {
    return null;
  }
};

// Define User role types
export type UserRole = 'employee' | 'manager' | 'founder' | null;

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

export const getCurrentRole = (): UserRole => {
  const user = getCurrentUser();
  return user ? user.role as UserRole : null;
};
