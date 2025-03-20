
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectProgress } from "@/components/ProjectProgress";
import { ProjectReports } from "@/components/ProjectReports";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Users, Calendar, MapPin, FileText } from "lucide-react";
import { useState, useEffect } from "react";

// Mock data - in a real app this would come from an API
const projectsData = [
  {
    id: "energy-monitoring",
    title: "Smart Energy Monitoring System",
    department: "Electrical & Electronics Engineering",
    description: "A real-time energy monitoring and optimization system for campus buildings that tracks electricity usage, identifies waste, and suggests optimizations to reduce overall consumption. The system uses IoT sensors installed across campus buildings to collect real-time data on electricity usage, temperature, and occupancy. Machine learning algorithms analyze this data to identify patterns and anomalies, allowing facility managers to make informed decisions about energy conservation.",
    fullDescription: [
      "The Smart Energy Monitoring System is a comprehensive solution that addresses the growing need for energy efficiency in educational institutions. By leveraging IoT technology and data analytics, our system provides unprecedented visibility into energy consumption patterns across the campus.",
      "Our network of sensors captures granular data on electrical usage, ambient conditions, and building occupancy. This information is processed through our custom-built analytics platform, which identifies optimization opportunities that would be impossible to detect manually.",
      "The project also includes a user-friendly dashboard that visualizes energy usage in real-time, making complex data accessible to facilities management staff. Push notifications alert personnel to unusual consumption patterns or potential equipment failures before they become critical issues."
    ],
    objectives: [
      "Reduce overall campus energy consumption by 15% within the first year of deployment",
      "Identify and eliminate energy waste in building systems and equipment",
      "Develop predictive maintenance capabilities to prevent equipment failures",
      "Create a scalable platform that can expand to include water and gas usage monitoring"
    ],
    image: "/project-energy.jpg",
    progress: 75,
    lead: "Dr. Sumitha Manoj",
    students: ["Arjun Kumar", "Priya Desai", "Nikhil Shah"],
    timeline: "Jan 2025 - Dec 2025",
    location: "Main Campus - Engineering Block",
    milestones: [
      {
        title: "Project Initiation",
        description: "Define project scope, objectives, and requirements",
        status: "completed",
        date: "Jan 2025"
      },
      {
        title: "System Design",
        description: "Complete hardware and software architecture design",
        status: "completed",
        date: "Mar 2025"
      },
      {
        title: "Prototype Development",
        description: "Build and test initial sensor network and dashboard",
        status: "completed",
        date: "May 2025"
      },
      {
        title: "Campus Integration",
        description: "Install sensors across campus buildings and integrate with central system",
        status: "in-progress",
        date: "Jul 2025"
      },
      {
        title: "Data Analysis Platform",
        description: "Develop and implement machine learning algorithms for energy optimization",
        status: "pending",
        date: "Sep 2025"
      },
      {
        title: "Final Deployment & Documentation",
        description: "Full system deployment and knowledge transfer to facilities management",
        status: "pending",
        date: "Nov 2025"
      }
    ],
    reports: [
      {
        id: "rep-1",
        title: "Initial Project Proposal",
        author: "Dr. Sumitha Manoj",
        date: "Jan 15, 2025",
        type: "milestone",
        fileSize: "1.2 MB"
      },
      {
        id: "rep-2",
        title: "Q1 Progress Report",
        author: "Arjun Kumar",
        date: "Mar 30, 2025",
        type: "quarterly",
        fileSize: "3.4 MB"
      },
      {
        id: "rep-3",
        title: "System Architecture Documentation",
        author: "Priya Desai",
        date: "Apr 12, 2025",
        type: "milestone",
        fileSize: "5.7 MB"
      },
      {
        id: "rep-4",
        title: "Prototype Testing Results",
        author: "Nikhil Shah",
        date: "Jun 5, 2025",
        type: "milestone",
        fileSize: "8.1 MB"
      },
      {
        id: "rep-5",
        title: "Q2 Progress Report",
        author: "Dr. Sumitha Manoj",
        date: "Jun 30, 2025",
        type: "quarterly",
        fileSize: "4.2 MB"
      },
      {
        id: "rep-6",
        title: "Mid-Year Project Presentation",
        author: "Team",
        date: "Jul 15, 2025",
        type: "presentation",
        fileSize: "12.5 MB"
      }
    ]
  },
  {
    id: "ai-crop",
    title: "AI-Powered Crop Analysis",
    department: "Artificial Intelligence & Data Science",
    description: "Machine learning algorithms that analyze soil conditions, weather patterns, and plant health metrics to optimize crop yield while reducing resource consumption like water and fertilizers.",
    fullDescription: [
      "The AI-Powered Crop Analysis project aims to revolutionize agricultural practices through the application of artificial intelligence and machine learning technologies. Our system uses a combination of ground sensors, drone imagery, and weather data to provide comprehensive monitoring of crop health and growing conditions.",
      "By processing this multi-modal data through our specialized neural networks, we can detect early signs of plant disease, predict optimal irrigation schedules, and recommend precise fertilizer applications. This level of granularity enables farmers to move beyond one-size-fits-all approaches to agriculture.",
      "The system is being designed with both large-scale commercial farms and small local farmers in mind, with a scalable architecture that can adapt to different agricultural contexts and crop types."
    ],
    objectives: [
      "Increase crop yields by at least 20% compared to traditional farming methods",
      "Reduce water consumption by 30% through precision irrigation recommendations",
      "Minimize fertilizer usage while maintaining or improving crop quality",
      "Develop early detection systems for crop diseases and pest infestations"
    ],
    image: "/project-ai.jpg",
    progress: 60,
    lead: "Dr. Rajesh Bhat",
    students: ["Amrita Singh", "Mohammed Farooq", "Shreya Joshi"],
    timeline: "Mar 2025 - Feb 2026",
    location: "Agricultural Research Station, Dharwad",
    milestones: [
      {
        title: "Project Planning & Research",
        description: "Literature review and project planning",
        status: "completed",
        date: "Mar 2025"
      },
      {
        title: "Data Collection Infrastructure",
        description: "Deploy sensors and establish data collection systems",
        status: "completed",
        date: "May 2025"
      },
      {
        title: "Initial ML Model Development",
        description: "Develop and train preliminary machine learning models",
        status: "completed",
        date: "Jul 2025"
      },
      {
        title: "Field Testing Phase 1",
        description: "Test system on experimental crop plots",
        status: "in-progress",
        date: "Sep 2025"
      },
      {
        title: "Algorithm Refinement",
        description: "Optimize models based on initial field test results",
        status: "pending",
        date: "Nov 2025"
      },
      {
        title: "Field Testing Phase 2",
        description: "Extended testing on larger agricultural areas",
        status: "pending",
        date: "Jan 2026"
      }
    ],
    reports: [
      {
        id: "rep-1",
        title: "Project Inception Report",
        author: "Dr. Rajesh Bhat",
        date: "Mar 20, 2025",
        type: "milestone",
        fileSize: "2.3 MB"
      },
      {
        id: "rep-2",
        title: "Sensor Network Design Document",
        author: "Mohammed Farooq",
        date: "Apr 15, 2025",
        type: "milestone",
        fileSize: "4.7 MB"
      },
      {
        id: "rep-3",
        title: "Q1 Progress Report",
        author: "Amrita Singh",
        date: "May 31, 2025",
        type: "quarterly",
        fileSize: "3.1 MB"
      },
      {
        id: "rep-4",
        title: "Machine Learning Architecture",
        author: "Shreya Joshi",
        date: "Jun 25, 2025",
        type: "milestone",
        fileSize: "5.9 MB"
      },
      {
        id: "rep-5",
        title: "Initial Data Analysis Findings",
        author: "Team",
        date: "Jul 30, 2025",
        type: "presentation",
        fileSize: "8.4 MB"
      },
      {
        id: "rep-6",
        title: "Q2 Progress Report",
        author: "Dr. Rajesh Bhat",
        date: "Aug 31, 2025",
        type: "quarterly",
        fileSize: "3.8 MB"
      }
    ]
  },
  // Add similar detailed data for other projects
  {
    id: "delivery-robot",
    title: "Autonomous Delivery Robot",
    department: "Mechanical Engineering",
    description: "A robot designed for efficient last-mile delivery in urban environments. The robot navigates sidewalks, avoids obstacles, and securely delivers packages to their destination.",
    fullDescription: [],
    objectives: [],
    image: "/project-robot.jpg",
    progress: 40,
    lead: "Prof. Venkatesh Rao",
    students: ["Akash Patel", "Divya Kamath", "Rahul Menon"],
    timeline: "Jun 2025 - May 2026",
    location: "Robotics Lab",
    milestones: [],
    reports: []
  },
  {
    id: "sustainable-materials",
    title: "Sustainable Construction Materials",
    department: "Civil Engineering",
    description: "Developing eco-friendly building materials from recycled waste products. The research focuses on creating strong, durable construction materials that have a lower carbon footprint.",
    fullDescription: [],
    objectives: [],
    image: "/project-civil.jpg",
    progress: 85,
    lead: "Dr. Lakshmi Narayanan",
    students: ["Shweta Kulkarni", "Vivek Hegde", "Tanvi Mallya"],
    timeline: "Feb 2025 - Oct 2025",
    location: "Material Science Lab",
    milestones: [],
    reports: []
  }
];

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchProject = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProject = projectsData.find(p => p.id === id);
        setProject(foundProject || null);
        setLoading(false);
      }, 800);
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="mb-6">
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-12 w-3/4" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Skeleton className="h-64 w-full mb-6" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-3/4" />
              </div>
              <div>
                <Skeleton className="h-96 w-full" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-nitte-blue text-white rounded-full font-medium hover:bg-nitte-blue/90 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="mb-8">
            <Link 
              to="/projects"
              className="inline-flex items-center text-nitte-blue hover:underline mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Projects
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold text-nitte-blue mb-2">{project.title}</h1>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 bg-nitte-blue/10 text-nitte-blue text-sm font-medium rounded-full">
                {project.department}
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                <Calendar className="w-3 h-3 mr-1" /> {project.timeline}
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                <MapPin className="w-3 h-3 mr-1" /> {project.location}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden mb-8 shadow-sm">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
                  }}
                />
              </div>
              
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="objectives">Objectives</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  
                  {project.fullDescription && project.fullDescription.map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-700 leading-relaxed">{paragraph}</p>
                  ))}
                </TabsContent>
                
                <TabsContent value="objectives">
                  {project.objectives && project.objectives.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {project.objectives.map((objective: string, index: number) => (
                        <li key={index} className="text-gray-700">{objective}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 italic">Objectives information not available</p>
                  )}
                </TabsContent>
                
                <TabsContent value="team">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2">Project Lead</h3>
                      <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                        <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-gray-500 mr-4">
                          {project.lead.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium">{project.lead}</p>
                          <p className="text-sm text-gray-600">Principal Investigator</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                        <Users className="w-4 h-4 mr-2" /> Student Researchers
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.students.map((student: string, index: number) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center">
                            <div className="bg-nitte-blue/10 text-nitte-blue rounded-full w-10 h-10 flex items-center justify-center mr-3">
                              {student.split(' ').map((n: string) => n[0]).join('')}
                            </div>
                            <p className="font-medium">{student}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-nitte-blue mb-6">Project Reports</h2>
                {project.reports && project.reports.length > 0 ? (
                  <ProjectReports reports={project.reports} />
                ) : (
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <FileText className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500">No reports available for this project yet</p>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-bold text-nitte-blue mb-4">Progress Tracking</h2>
                {project.milestones && project.milestones.length > 0 ? (
                  <ProjectProgress progress={project.progress} milestones={project.milestones} />
                ) : (
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <p className="text-gray-500">Progress tracking information not available</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
