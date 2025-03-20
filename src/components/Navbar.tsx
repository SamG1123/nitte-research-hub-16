
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
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
          <img 
            src="/nmit-logo.png" 
            alt="NMIT Logo" 
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['timeline', 'projects', 'apply'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className="text-white font-medium tracking-wide hover:text-nitte-gold transition-colors duration-300 link-underline"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
