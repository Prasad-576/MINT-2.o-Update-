export interface User {
  id: string;
  email: string;
  role: 'employee' | 'manager' | 'founder';
  name: string;
}

export interface LoginCredentials {
  email: string;
  password?: string; // Optional if we just validate in service
}

export interface AuthResponse {
  user?: User;
  error?: string;
}
