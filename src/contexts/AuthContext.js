
import { createContext, useState, useEffect } from "react";

// Define user roles as string constants
const ROLE_FACULTY = "faculty";
const ROLE_MEMBER = "member";

// Mock user data for demo purposes
const MOCK_USERS = [
  {
    id: "1",
    email: "faculty@nmit.ac.in",
    password: "password123",
    name: "Dr. Aditya Sharma",
    role: ROLE_FACULTY,
    department: "Computer Science"
  },
  {
    id: "2",
    email: "member@nmit.ac.in",
    password: "password123",
    name: "Priya Desai",
    role: ROLE_MEMBER,
    department: "Electrical Engineering"
  }
];

// Create the context with a default value
export const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  logout: () => {},
  isFaculty: () => false,
  isMember: () => false,
});

// Create the auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
  const login = async (email, password) => {
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
  const isFaculty = () => user?.role === ROLE_FACULTY;
  const isMember = () => user?.role === ROLE_MEMBER;

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
