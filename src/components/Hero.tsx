
import { useEffect, useRef } from 'react';

export function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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

    if (imgElement) observer.observe(imgElement);
    if (titleElement) observer.observe(titleElement);
    if (subtitleElement) observer.observe(subtitleElement);

    return () => {
      if (imgElement) observer.unobserve(imgElement);
      if (titleElement) observer.unobserve(titleElement);
      if (subtitleElement) observer.unobserve(subtitleElement);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-cover bg-center opacity-[0.03]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto text-center">
        <img
          ref={imageRef}
          src="/rnd.png"
          alt="Nitte R&D Club Logo"
          className="w-44 h-auto mb-8 opacity-0 transition-all duration-1000 animate-float"
        />
        
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight text-nitte-blue opacity-0 transition-all duration-1000 delay-200"
        >
          Nitte R&D Club
        </h1>
        
        <p 
          ref={subtitleRef}
          className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl opacity-0 transition-all duration-1000 delay-500"
        >
          Fostering innovation and research excellence at NMIT
        </p>
        
        <div className="mt-12 opacity-0 animate-fade-in animation-delay-700">
          <a 
            href="#introduction" 
            className="inline-flex items-center justify-center px-8 py-4 bg-nitte-blue text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-nitte-blue/90"
          >
            Discover More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
