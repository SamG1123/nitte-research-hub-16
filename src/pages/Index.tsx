
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Departments } from "@/components/Departments";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { Apply } from "@/components/Apply";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Apply smooth scrolling
  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute("href");
      
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const id = href.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Account for header height
            behavior: "smooth"
          });
          
          // Update URL with the hash
          window.history.pushState(null, "", href);
        }
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleHashClick);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleHashClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background decoration */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-nitte-blue/5 blur-3xl transform rotate-12"></div>
        <div className="absolute top-1/3 right-0 w-2/3 h-1/3 rounded-full bg-nitte-gold/5 blur-3xl"></div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <div id="about"></div> {/* Anchor for smooth scrolling */}
        <About />
        <Departments />
        <Timeline />
        <Projects />
        <Apply />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
