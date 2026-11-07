import { LoginCredentials, AuthResponse, User } from './authTypes';
import { setSession, clearSession } from './authUtils';

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return new Promise((resolve, reject) => {
      // Simulate network delay
      setTimeout(() => {
        const email = credentials.email.trim();
        const password = credentials.password?.trim();

        if (email === 'tarkadesignstudio@gmail.com' && password === '1234567890') {
          const user: User = {
            id: '3',
            email,
            role: 'founder',
            name: 'David Kim'
          };
          setSession(user);
          resolve({ user });
        } else if (email === 'prasadbange5@gmail.com' && password === '123456789') {
          const user: User = {
            id: '2',
            email,
            role: 'manager',
            name: 'Sarah Chen'
          };
          setSession(user);
          resolve({ user });
        } else if (email === 'prasadbange2@gmail.com' && password === '12345678') {
          const user: User = {
            id: '1',
            email,
            role: 'employee',
            name: 'Alex Morgan'
          };
          setSession(user);
          resolve({ user });
        } else {
          reject(new Error('Invalid email or password.'));
        }
      }, 800);
    });
  },

  logout: async (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        clearSession();
        resolve();
      }, 300);
    });
  }
};
