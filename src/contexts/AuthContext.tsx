import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  role: 'student' | 'private-sector' | 'admin';
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for MVP - credentials loaded from environment variables
const getMockUsers = () => [
  {
    id: '1',
    email: import.meta.env.VITE_STUDENT_EMAIL || 'student@tvet.com',
    password: import.meta.env.VITE_STUDENT_PASSWORD || 'student123',
    role: 'student' as const,
    name: 'John Student'
  },
  {
    id: '2',
    email: import.meta.env.VITE_COMPANY_EMAIL || 'company@tvet.com',
    password: import.meta.env.VITE_COMPANY_PASSWORD || 'company123',
    role: 'private-sector' as const,
    name: 'Jane Company Rep'
  },
  {
    id: '3',
    email: import.meta.env.VITE_ADMIN_EMAIL || 'admin@tvet.com',
    password: import.meta.env.VITE_ADMIN_PASSWORD || 'admin123',
    role: 'admin' as const,
    name: 'Admin User'
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('tvet_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string, role: string): boolean => {
    const mockUsers = getMockUsers();
    const foundUser = mockUsers.find(
      u => u.email === email && u.password === password && u.role === role
    );

    if (foundUser) {
      const userData: User = {
        id: foundUser.id,
        email: foundUser.email,
        role: foundUser.role,
        name: foundUser.name
      };
      setUser(userData);
      localStorage.setItem('tvet_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tvet_user');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
