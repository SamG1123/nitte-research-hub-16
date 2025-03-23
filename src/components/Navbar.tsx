
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/nmit.png" alt="Nitte R&D Club" className="h-24" /* Doubled size from h-12 to h-24 */ />
          <span className="font-display font-semibold text-lg text-nitte-blue hidden sm:inline-block">
            Nitte R&D Club
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-nitte-blue transition-colors">
            Home
          </Link>
          <Link to="/#about" className="text-gray-700 hover:text-nitte-blue transition-colors">
            About
          </Link>
          <Link to="/#departments" className="text-gray-700 hover:text-nitte-blue transition-colors">
            Departments
          </Link>
          <Link to="/#gallery" className="text-gray-700 hover:text-nitte-blue transition-colors">
            Gallery
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-nitte-blue transition-colors">
            Projects
          </Link>
          <Link to="/#apply" className="text-gray-700 hover:text-nitte-blue transition-colors">
            Apply
          </Link>
          
          {isAuthenticated ? (
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="text-gray-700 hover:text-nitte-blue transition-colors py-2">
            Home
          </Link>
          <Link to="/#about" className="text-gray-700 hover:text-nitte-blue transition-colors py-2">
            About
          </Link>
          <Link to="/#departments" className="text-gray-700 hover:text-nitte-blue transition-colors py-2">
            Departments
          </Link>
          <Link to="/#gallery" className="text-gray-700 hover:text-nitte-blue transition-colors py-2">
            Gallery
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-nitte-blue transition-colors py-2">
            Projects
          </Link>
          <Link to="/#apply" className="text-gray-700 hover:text-nitte-blue transition-colors py-2">
            Apply
          </Link>
          
          {isAuthenticated ? (
            <Link to="/dashboard" className="py-2">
              <Button size="sm" className="w-full">
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link to="/login" className="py-2">
              <Button size="sm" className="w-full">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
