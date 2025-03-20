
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: "energy-monitoring",
    title: "Smart Energy Monitoring System",
    department: "Electrical & Electronics Engineering",
    description: "A real-time energy monitoring and optimization system for campus buildings that tracks electricity usage, identifies waste, and suggests optimizations to reduce overall consumption.",
    image: "/project-energy.jpg",
    progress: 75,
    lead: "Dr. Sumitha Manoj",
    students: ["Arjun Kumar", "Priya Desai", "Nikhil Shah"],
    timeline: "Jan 2025 - Dec 2025"
  },
  {
    id: "ai-crop",
    title: "AI-Powered Crop Analysis",
    department: "Artificial Intelligence & Data Science",
    description: "Machine learning algorithms that analyze soil conditions, weather patterns, and plant health metrics to optimize crop yield while reducing resource consumption like water and fertilizers.",
    image: "/project-ai.jpg",
    progress: 60,
    lead: "Dr. Rajesh Bhat",
    students: ["Amrita Singh", "Mohammed Farooq", "Shreya Joshi"],
    timeline: "Mar 2025 - Feb 2026"
  },
  {
    id: "delivery-robot",
    title: "Autonomous Delivery Robot",
    department: "Mechanical Engineering",
    description: "A robot designed for efficient last-mile delivery in urban environments. The robot navigates sidewalks, avoids obstacles, and securely delivers packages to their destination.",
    image: "/project-robot.jpg",
    progress: 40,
    lead: "Prof. Venkatesh Rao",
    students: ["Akash Patel", "Divya Kamath", "Rahul Menon"],
    timeline: "Jun 2025 - May 2026"
  },
  {
    id: "sustainable-materials",
    title: "Sustainable Construction Materials",
    department: "Civil Engineering",
    description: "Developing eco-friendly building materials from recycled waste products. The research focuses on creating strong, durable construction materials that have a lower carbon footprint.",
    image: "/project-civil.jpg",
    progress: 85,
    lead: "Dr. Lakshmi Narayanan",
    students: ["Shweta Kulkarni", "Vivek Hegde", "Tanvi Mallya"],
    timeline: "Feb 2025 - Oct 2025"
  },
  {
    id: "renewable-energy-storage",
    title: "Renewable Energy Storage Solutions",
    department: "Electrical & Electronics Engineering",
    description: "Development of advanced battery technologies and energy storage systems to maximize the effectiveness of renewable energy sources like solar and wind power.",
    image: "/placeholder-image.jpg",
    progress: 30,
    lead: "Dr. Ananth Sharma",
    students: ["Kiran Rao", "Sneha Kulkarni", "Varun Dixit"],
    timeline: "Aug 2025 - Jul 2026"
  },
  {
    id: "ml-healthcare",
    title: "Machine Learning in Healthcare Diagnostics",
    department: "Artificial Intelligence & Data Science",
    description: "Implementing machine learning models to assist in early detection of diseases through pattern recognition in medical imaging and patient data analysis.",
    image: "/placeholder-image.jpg",
    progress: 55,
    lead: "Dr. Neha Patil",
    students: ["Sanjay Verma", "Leela Kamath", "Rohan Desai"],
    timeline: "Apr 2025 - Mar 2026"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-nitte-blue mb-4">Research & Development Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our innovative projects that push the boundaries of technology and science
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <Link 
                key={project.id}
                to={`/projects/${project.id}`}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full"
              >
                <div className="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4">
                      <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full mb-2">
                        {project.department}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm mb-4 flex-1">{project.description.slice(0, 120)}...</p>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className="bg-nitte-blue h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{project.timeline}</span>
                      <span className="text-nitte-blue font-medium text-sm flex items-center">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:ml-2 transition-all">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
