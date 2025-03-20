
import { createContext, useState, useEffect, ReactNode } from "react";

// Define user roles
export type UserRole = "faculty" | "member";

// Define user interface
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  department?: string;
}

// Define context interface
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isFaculty: () => boolean;
  isMember: () => boolean;
}

// Mock user data for demo purposes
const MOCK_USERS = [
  {
    id: "1",
    email: "faculty@nmit.ac.in",
    password: "password123",
    name: "Dr. Aditya Sharma",
    role: "faculty" as UserRole,
    department: "Computer Science"
  },
  {
    id: "2",
    email: "member@nmit.ac.in",
    password: "password123",
    name: "Priya Desai",
    role: "member" as UserRole,
    department: "Electrical Engineering"
  }
];

// Create the context with a default value
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  logout: () => {},
  isFaculty: () => false,
  isMember: () => false,
});

// Define props for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

// Create the auth provider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing user session on component mount
  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem("rnd_user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Error parsing stored user:", error);
          localStorage.removeItem("rnd_user");
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, you'd make an API call here
    // For demo purposes, we'll use mock data
    const foundUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("rnd_user", JSON.stringify(userWithoutPassword));
      return true;
    }

    return false;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("rnd_user");
  };

  // Role check functions
  const isFaculty = () => user?.role === "faculty";
  const isMember = () => user?.role === "member";

  // Create the context value object
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    isFaculty,
    isMember,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
