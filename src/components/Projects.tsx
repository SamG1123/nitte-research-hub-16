
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";

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
      description: "A comprehensive real-time energy monitoring system that tracks consumption patterns across campus buildings, identifies efficiency opportunities, and helps reduce overall energy usage through smart automation.",
      image: "/project-energy.jpg",
      status: "Ongoing",
      leaders: "Dr. Priya Sharma, Aditya Patel"
    },
    {
      id: "ai-crop",
      title: "AI-Powered Crop Analysis",
      department: "Artificial Intelligence & Data Science",
      description: "Advanced machine learning algorithms analyze soil conditions, weather patterns, and crop health to maximize yield while minimizing resource usage. The system provides actionable insights for local farmers.",
      image: "/project-ai.jpg",
      status: "Completed",
      leaders: "Dr. Raj Kumar, Ananya Singh"
    },
    {
      id: "delivery-robot",
      title: "Autonomous Delivery Robot",
      department: "Robotics & Artificial Intelligence",
      description: "A self-navigating robot designed for efficient last-mile delivery in urban environments. The prototype uses computer vision and advanced path-finding algorithms to safely navigate crowded spaces.",
      image: "/project-robot.jpg",
      status: "Ongoing",
      leaders: "Prof. Vinod Mehta, Sanjay Reddy"
    },
    {
      id: "sustainable-materials",
      title: "Sustainable Construction Materials",
      department: "Civil Engineering",
      description: "Development of eco-friendly building materials from recycled industrial waste products. The research focuses on creating alternatives to traditional concrete that reduce carbon footprint while maintaining structural integrity.",
      image: "/project-civil.jpeg",
      status: "Ongoing",
      leaders: "Dr. Latha Krishnan, Rahul Verma"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div
        ref={sectionRef}
        className="container mx-auto max-w-6xl opacity-0 transition-all duration-1000"
      >
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="bg-nitte-blue/10 text-nitte-blue px-3 py-1 text-sm font-medium rounded-full mb-6 border-nitte-blue/20">
            Research Excellence
          </Badge>
          <h2 className="section-title text-nitte-blue">
            Featured Research Projects
          </h2>
          <p className="section-subtitle">
            Discover innovative research and development initiatives created by our talented students and faculty members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
                  }}
                />
                <div className="absolute top-4 right-4 z-20">
                  <Badge className={`${
                    project.status === "Ongoing" 
                    ? "bg-green-500/90" 
                    : "bg-blue-500/90"} text-white`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline" className="bg-white/20 backdrop-blur-sm text-white text-xs border-white/30">
                      {project.department}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                
                <div className="mt-auto">
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">Project Leaders:</span> {project.leaders}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/projects/${project.id}`}
                      className="text-nitte-blue font-semibold inline-flex items-center group-hover:underline"
                    >
                      View Full Details
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:ml-2 transition-all">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/projects" 
            className="inline-flex items-center justify-center px-8 py-4 bg-nitte-blue text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-nitte-blue/90"
          >
            View All Research Projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
