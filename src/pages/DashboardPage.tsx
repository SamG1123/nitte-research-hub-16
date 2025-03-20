
import { useAuth } from "@/hooks/useAuth";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Clipboard, 
  FileEdit, 
  Settings, 
  Users, 
  Plus, 
  LogOut,
  Eye,
  EyeOff
} from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

// Mock project data for demo
const projectsData = [
  {
    id: "energy-monitoring",
    title: "Smart Energy Monitoring System",
    department: "Electrical & Electronics Engineering",
    status: "active",
    visible: true,
  },
  {
    id: "ai-crop",
    title: "AI-Powered Crop Analysis",
    department: "Artificial Intelligence & Data Science",
    status: "active",
    visible: true,
  },
  {
    id: "delivery-robot",
    title: "Autonomous Delivery Robot",
    department: "Mechanical Engineering",
    status: "active",
    visible: true,
  },
  {
    id: "sustainable-materials",
    title: "Sustainable Construction Materials",
    department: "Civil Engineering",
    status: "completed",
    visible: true,
  },
  {
    id: "renewable-energy-storage",
    title: "Renewable Energy Storage Solutions",
    department: "Electrical & Electronics Engineering",
    status: "pending",
    visible: false,
  }
];

export default function DashboardPage() {
  const { user, logout, isFaculty } = useAuth();
  const [projects, setProjects] = useState(projectsData);

  const toggleVisibility = (projectId: string) => {
    setProjects(projects.map(project => 
      project.id === projectId 
        ? { ...project, visible: !project.visible } 
        : project
    ));
    
    toast({
      title: "Project visibility updated",
      description: "The project visibility has been successfully updated."
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Dashboard Header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-nitte-blue">Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Welcome back, {user?.name}
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-3">
              {isFaculty() && (
                <Button variant="outline" asChild>
                  <Link to="/manage-users">
                    <Users className="mr-2 h-4 w-4" />
                    Manage Users
                  </Link>
                </Button>
              )}
              
              <Button variant="default" asChild>
                <Link to="/profile">
                  <Settings className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </Button>
              
              <Button variant="outline" onClick={() => logout()}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Sidebar */}
            <div className="col-span-1 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h2 className="font-semibold text-gray-800 mb-4">Quick Actions</h2>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/dashboard">
                      <Clipboard className="mr-2 h-4 w-4" />
                      My Projects
                    </Link>
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/edit-project">
                      <FileEdit className="mr-2 h-4 w-4" />
                      Update Project
                    </Link>
                  </Button>
                  
                  {isFaculty() && (
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/new-project">
                        <Plus className="mr-2 h-4 w-4" />
                        Add New Project
                      </Link>
                    </Button>
                  )}
                  
                  {isFaculty() && (
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/settings">
                        <Settings className="mr-2 h-4 w-4" />
                        Admin Settings
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h2 className="font-semibold text-gray-800 mb-4">User Information</h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Name:</span>
                    <p>{user?.name}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Email:</span>
                    <p>{user?.email}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Role:</span>
                    <p className="capitalize">{user?.role}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Department:</span>
                    <p>{user?.department}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="col-span-1 md:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Your Projects</h2>
                  
                  {isFaculty() && (
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/new-project">
                        <Plus className="mr-2 h-4 w-4" />
                        New Project
                      </Link>
                    </Button>
                  )}
                </div>
                
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div 
                      key={project.id}
                      className="border border-gray-100 rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 transition-all"
                    >
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium text-gray-800">{project.title}</h3>
                          <span className={`ml-3 text-xs px-2 py-1 rounded-full capitalize
                            ${project.status === 'active' ? 'bg-green-100 text-green-800' : 
                              project.status === 'completed' ? 'bg-blue-100 text-blue-800' : 
                              'bg-amber-100 text-amber-800'}`}
                          >
                            {project.status}
                          </span>
                          
                          {!project.visible && (
                            <span className="ml-2 text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                              Hidden
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{project.department}</p>
                      </div>
                      
                      <div className="flex space-x-2">
                        {isFaculty() && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => toggleVisibility(project.id)}
                            title={project.visible ? "Hide Project" : "Show Project"}
                          >
                            {project.visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        )}
                        
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/projects/${project.id}`}>
                            View
                          </Link>
                        </Button>
                        
                        <Button variant="default" size="sm" asChild>
                          <Link to={`/edit-project/${project.id}`}>
                            Edit
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
