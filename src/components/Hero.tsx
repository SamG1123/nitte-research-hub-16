
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

export function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const imgElement = imageRef.current;
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    const statsElement = statsRef.current;

    if (imgElement) observer.observe(imgElement);
    if (titleElement) observer.observe(titleElement);
    if (subtitleElement) observer.observe(subtitleElement);
    if (statsElement) observer.observe(statsElement);

    return () => {
      if (imgElement) observer.unobserve(imgElement);
      if (titleElement) observer.unobserve(titleElement);
      if (subtitleElement) observer.unobserve(subtitleElement);
      if (statsElement) observer.unobserve(statsElement);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20 pb-16 px-4 overflow-hidden">
      {/* Background pattern and decorative elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-cover bg-center opacity-[0.06]"
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-nitte-blue/5 rounded-full filter blur-3xl z-0 animate-float-slow"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-nitte-gold/5 rounded-full filter blur-3xl z-0 animate-float"></div>
      
      {/* Flowy background that will appear above the About section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      
      {/* Main content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full">
        {/* Left column for text content */}
        <div className="md:w-1/2 text-left md:pr-12 mb-10 md:mb-0">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-gotham font-bold tracking-tight text-nitte-blue opacity-0 transition-all duration-1000 delay-200"
          >
            Innovate.<br />
            Research.<br />
            <span className="text-nitte-gold">Develop.</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="mt-6 text-xl md:text-2xl font-gotham text-gray-600 max-w-2xl opacity-0 transition-all duration-1000 delay-500"
          >
            Fostering innovation and research excellence at Nitte Mahalinga Adyanthaya Memorial Institute of Technology
          </p>
          
          <div className="mt-10 space-x-4 opacity-0 animate-fade-in animation-delay-700">
            <Button
              size="lg"
              className="bg-nitte-blue hover:bg-nitte-blue/90 text-white rounded-full py-6 px-8 text-lg font-gotham"
            >
              Explore Projects
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-nitte-blue text-nitte-blue hover:bg-nitte-blue/10 rounded-full py-6 px-8 text-lg font-gotham"
            >
              Join Now
            </Button>
          </div>
        </div>
        
        {/* Right column for image and floating elements */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          <div className="absolute w-full h-full bg-gradient-radial from-nitte-gold/5 to-transparent rounded-full blur-3xl z-0"></div>
          
          <img
            ref={imageRef}
            src="/rnd.png"
            alt="Nitte R&D Club Logo"
            className="w-72 h-auto relative z-10 opacity-0 transition-all duration-1000"
          />
        </div>
      </div>
      
      {/* Stats section */}
      <div 
        ref={statsRef}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto z-20 opacity-0 transition-all duration-1000 delay-700"
      >
        <div className="text-center p-6 glass-card rounded-xl backdrop-blur-sm">
          <h3 className="text-4xl font-bold font-gotham text-nitte-blue mb-2">40+</h3>
          <p className="text-gray-600 font-gotham">Ongoing Projects</p>
        </div>
        
        <div className="text-center p-6 glass-card rounded-xl backdrop-blur-sm">
          <h3 className="text-4xl font-bold font-gotham text-nitte-blue mb-2">12</h3>
          <p className="text-gray-600 font-gotham">Departments</p>
        </div>
        
        <div className="text-center p-6 glass-card rounded-xl backdrop-blur-sm">
          <h3 className="text-4xl font-bold font-gotham text-nitte-blue mb-2">200+</h3>
          <p className="text-gray-600 font-gotham">Student Researchers</p>
        </div>
        
        <div className="text-center p-6 glass-card rounded-xl backdrop-blur-sm">
          <h3 className="text-4xl font-bold font-gotham text-nitte-blue mb-2">25+</h3>
          <p className="text-gray-600 font-gotham">Faculty Mentors</p>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a 
          href="#introduction" 
          className="inline-flex items-center justify-center text-nitte-blue"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
