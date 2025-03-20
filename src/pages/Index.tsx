
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
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
