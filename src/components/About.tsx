
import { useEffect, useRef } from 'react';

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <section id="introduction" className="py-24 px-4 relative bg-gradient-to-b from-white to-gray-50">
      <div 
        ref={sectionRef}
        className="container mx-auto max-w-5xl glass-card rounded-[40px] py-16 px-8 md:px-16 opacity-0 transition-all duration-1000"
      >
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-nitte-gold/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-nitte-blue/10 rounded-full blur-3xl -z-10" />
      
        <span className="inline-flex items-center justify-center px-3 py-1 bg-nitte-gold/10 text-nitte-gold text-sm font-medium rounded-full mb-6">
          About Us
        </span>
        
        <h2 className="section-title text-nitte-blue">
          Nitte R&D Club
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          The Nitte R&D Club is a community of enthusiastic students and faculty members dedicated to fostering research, innovation, and technological advancements. Our mission is to provide a collaborative platform where students can engage in interdisciplinary projects, explore new ideas, and work on cutting-edge technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'Research',
              description: 'Pushing boundaries through rigorous academic exploration and discovery',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              )
            },
            {
              title: 'Development',
              description: 'Crafting innovative solutions to real-world problems through technical expertise',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              )
            },
            {
              title: 'Collaboration',
              description: 'Working together across disciplines to achieve breakthrough innovations',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              )
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/50 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-nitte-blue/10 text-nitte-blue mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-nitte-blue">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
