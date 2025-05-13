
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from './use-toast';

type UserRole = 'individual' | 'business' | 'ngo' | 'volunteer' | 'admin';

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  profileImage?: string;
};

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userType: UserRole;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('goodshare_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Error parsing stored user:', e);
        localStorage.removeItem('goodshare_user');
      }
    }
    setIsLoading(false);
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('goodshare_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('goodshare_user');
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // This is a mock implementation - in a real app, this would call an API
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network request
      
      // For demo purposes, allow any email/password with basic validation
      if (!email.includes('@') || password.length < 6) {
        toast({
          title: "Login Failed",
          description: "Invalid email or password.",
          variant: "destructive"
        });
        setIsLoading(false);
        return false;
      }
      
      // Mock user for demo
      const mockUser: User = {
        id: `user_${Math.random().toString(36).substring(2, 15)}`,
        email,
        firstName: email.split('@')[0],
        lastName: 'User',
        role: 'individual',
      };
      
      setUser(mockUser);
      toast({
        title: "Login Successful",
        description: `Welcome back, ${mockUser.firstName}!`,
      });
      
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login Failed",
        description: "An error occurred during login. Please try again.",
        variant: "destructive"
      });
      setIsLoading(false);
      return false;
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // This is a mock implementation - in a real app, this would call an API
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request
      
      // Mock user creation for demo
      const mockUser: User = {
        id: `user_${Math.random().toString(36).substring(2, 15)}`,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        role: userData.userType,
      };
      
      setUser(mockUser);
      toast({
        title: "Registration Successful",
        description: "Your account has been created successfully!",
      });
      
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration Failed",
        description: "An error occurred during registration. Please try again.",
        variant: "destructive"
      });
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (userData: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...userData } : null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      register,
      logout,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};
