
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export function Departments() {
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

  const departments = [
    {
      name: "Aeronautical Engineering",
      slug: "aeronautical-engineering"
    },
    {
      name: "Artificial Intelligence & Data Science",
      slug: "artificial-intelligence-data-science"
    },
    {
      name: "Artificial Intelligence & Machine Learning",
      slug: "artificial-intelligence-machine-learning"
    },
    {
      name: "Civil Engineering",
      slug: "civil-engineering"
    },
    {
      name: "Computer Science & Engineering",
      slug: "computer-science-engineering"
    },
    {
      name: "Computer Science & Business Systems",
      slug: "computer-science-business-systems"
    },
    {
      name: "Electrical & Electronics Engineering",
      slug: "electrical-electronics-engineering"
    },
    {
      name: "Electronics & Communication Engineering",
      slug: "electronics-communication-engineering"
    },
    {
      name: "Electronics Engineering (VLSI)",
      slug: "electronics-engineering-vlsi"
    },
    {
      name: "Information Science & Engineering",
      slug: "information-science-engineering"
    },
    {
      name: "Mechanical Engineering",
      slug: "mechanical-engineering"
    },
    {
      name: "Robotics & Artificial Intelligence",
      slug: "robotics-artificial-intelligence"
    }
  ];

  return (
    <section id="departments" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div
        ref={sectionRef}
        className="container mx-auto max-w-6xl opacity-0 transition-all duration-1000"
      >
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center px-3 py-1 bg-nitte-blue/10 text-nitte-blue text-sm font-medium rounded-full mb-6">
            Our Departments
          </span>
          <h2 className="section-title text-nitte-blue">
            Interdisciplinary Excellence
          </h2>
          <p className="section-subtitle">
            Explore our diverse departments collaborating to push the boundaries of innovation and research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map((dept, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl glass-card transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-nitte-blue/5 to-nitte-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 p-6">
                <h3 className="text-lg font-semibold text-nitte-blue">{dept.name}</h3>
                
                <div className="mt-4 flex justify-between items-center">
                  <Link 
                    to={`/faculty/${dept.slug}`}
                    className="text-nitte-blue font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  >
                    Meet Faculty
                  </Link>
                  
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-nitte-blue/10 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-nitte-blue">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
