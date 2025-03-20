
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export function Projects() {
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
      { threshold: 0.1 }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  const projects = [
    {
      id: "energy-monitoring",
      title: "Smart Energy Monitoring System",
      department: "Electrical & Electronics Engineering",
      description: "A real-time energy monitoring and optimization system for campus buildings",
      image: "/project-energy.jpg"
    },
    {
      id: "ai-crop",
      title: "AI-Powered Crop Analysis",
      department: "Artificial Intelligence & Data Science",
      description: "Machine learning algorithms to optimize crop yield and reduce resource consumption",
      image: "/project-ai.jpg"
    },
    {
      id: "delivery-robot",
      title: "Autonomous Delivery Robot",
      department: "Mechanical Engineering",
      description: "A robot designed for efficient last-mile delivery in urban environments",
      image: "/project-robot.jpg"
    },
    {
      id: "sustainable-materials",
      title: "Sustainable Construction Materials",
      department: "Civil Engineering",
      description: "Developing eco-friendly building materials from recycled waste products",
      image: "/project-civil.jpeg"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div
        ref={sectionRef}
        className="container mx-auto max-w-6xl opacity-0 transition-all duration-1000"
      >
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center px-3 py-1 bg-nitte-blue/10 text-nitte-blue text-sm font-medium rounded-full mb-6">
            Our Work
          </span>
          <h2 className="section-title text-nitte-blue">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            Discover innovative research and development projects created by our talented students and faculty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
                  }}
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full mb-2">
                    {project.department}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <Link 
                    to={`/projects/${project.id}`}
                    className="text-nitte-blue font-medium inline-flex items-center text-sm"
                  >
                    View project details
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:ml-2 transition-all">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/projects" 
            className="inline-flex items-center justify-center px-6 py-3 bg-white border border-nitte-blue/20 text-nitte-blue rounded-full font-medium hover:bg-nitte-blue hover:text-white transition-all duration-300"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
