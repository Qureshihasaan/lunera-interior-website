import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// Mock user data for simulation
const MOCK_USER: User = {
  id: 'user_123',
  name: 'Sarah Lin',
  email: 'sarah@example.com',
  avatar: 'https://picsum.photos/id/66/100/100'
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check for existing token on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('lunera_token');
    const storedUser = localStorage.getItem('lunera_user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    // Simulate API call delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          // Mock successful login
          const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock_token_payload";
          const mockUser = { ...MOCK_USER, email }; // Use the email provided

          localStorage.setItem('lunera_token', mockToken);
          localStorage.setItem('lunera_user', JSON.stringify(mockUser));
          
          setToken(mockToken);
          setUser(mockUser);
          setIsAuthenticated(true);
          setIsLoading(false);
          resolve();
        } else {
          setIsLoading(false);
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const signup = async (name: string, email: string, password: string): Promise<void> => {
    setIsLoading(true);
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock_token_payload_new";
        const newUser: User = {
          id: `user_${Math.random().toString(36).substr(2, 9)}`,
          name,
          email,
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=004A3B&color=fff`
        };

        localStorage.setItem('lunera_token', mockToken);
        localStorage.setItem('lunera_user', JSON.stringify(newUser));

        setToken(mockToken);
        setUser(newUser);
        setIsAuthenticated(true);
        setIsLoading(false);
        resolve();
      }, 1500);
    });
  };

  const logout = () => {
    localStorage.removeItem('lunera_token');
    localStorage.removeItem('lunera_user');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
