
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Departments', path: '/#departments' },
    { name: 'Timeline', path: '/#timeline' },
    { name: 'Projects', path: '/projects' },
    { name: 'Apply', path: '/#apply' },
  ];

  return (
    <header 
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'bg-nitte-blue/90 backdrop-blur-sm py-3 shadow-md' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/nmit.jpg" 
              alt="NMIT Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-white font-medium tracking-wide hover:text-nitte-gold transition-colors duration-300 px-4 py-2"
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        <div className="md:hidden">
          <button 
            className="text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-nitte-blue/95 backdrop-blur-sm">
          <nav className="container mx-auto py-4">
            <ul className="flex flex-col space-y-3 px-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-white font-medium tracking-wide hover:text-nitte-gold transition-colors duration-300 block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
