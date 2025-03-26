
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-nitte-blue leading-tight mb-6">
              Innovate. Research.<br />
              <span className="text-nitte-gold">Discover.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Join the Nitte R&D Club to collaborate on groundbreaking research projects and enhance your technical skills through practical applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="bg-nitte-blue hover:bg-nitte-blue/90">
                <a href="#apply">Join the Club</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <img src="/hero-image.png" alt="Students working on research projects" className="w-full" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nitte-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
