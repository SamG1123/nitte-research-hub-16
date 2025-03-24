
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Calendar, BookOpen, Award, Briefcase, Mail, Linkedin } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

// Faculty data structure
type Faculty = {
  id: string;
  name: string;
  title: string;
  image: string;
  specialization: string[];
  email: string;
  education: string;
  research: string[];
  fullInfo?: {
    joiningDate?: string;
    experience?: string;
    qualification?: string;
    areaOfInterest?: string[];
    linkedin?: string;
    orcid?: string;
    googleScholar?: string;
    projects?: string[];
  };
};

// Department faculty data
const departmentFaculty: Record<string, { name: string; faculty: Faculty[] }> = {
  "aeronautical-engineering": {
    name: "Aeronautical Engineering",
    faculty: [
      {
        id: "aero-1",
        name: "Mr. Siddalingappa PK ",
        title: "Professor",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Aerodynamics", "Flight Mechanics", "Propulsion Systems"],
        email: "rajesh.kumar@example.edu",
        education: "Ph.D in Aerospace Engineering, IIT Kanpur",
        research: ["Flow Control and Optimization", "Aircraft Design", "Computational Fluid Dynamics"]
      },
      {
        id: "aero-2",
        name: "Dr. Sambhaji Lore",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Structural Mechanics", "Composite Materials", "Aircraft Structures"],
        email: "priya.singh@example.edu",
        education: "Ph.D in Mechanical Engineering, University of Michigan",
        research: ["Lightweight Aerospace Structures", "Damage Tolerance", "Material Characterization"]
      },
      {
        id: "aero-3",
        name: "Mr. Mallapa J",
        title: "Assistant Professor",
        image: "https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Flight Control Systems", "Avionics", "Unmanned Aerial Vehicles"],
        email: "arun.sharma@example.edu",
        education: "Ph.D in Aerospace Engineering, Caltech",
        research: ["Autonomous UAVs", "Flight Stability", "Navigation Systems"]
      }
    ]
  },
  "artificial-intelligence-data-science": {
    name: "Artificial Intelligence & Data Science",
    faculty: [
      {
        id: "aids-1",
        name: "Dr. Vadivel R",
        title: "Professor",
        image: "/lovable-uploads/f88be75b-7f30-405c-8477-2c05a23a25d9.png",
        specialization: ["Machine Learning", "Big Data Analytics", "AI Ethics"],
        email: "vadivel.r@example.edu",
        education: "Ph.D in Computer Science, Stanford University",
        research: ["Explainable AI", "Neural Networks", "Decision Support Systems"]
      },
      {
        id: "aids-2",
        name: "Dr. Meenakshi",
        title: "Associate Professor",
        image: "/lovable-uploads/46047831-3004-4233-8152-b3b3d010fed6.png",
        specialization: ["Natural Language Processing", "Deep Learning", "Computer Vision"],
        email: "meenakshi@example.edu",
        education: "Ph.D in Data Science, MIT",
        research: ["Sentiment Analysis", "Image Recognition", "Transformer Models"]
      }
    ]
  },
  "artificial-intelligence-machine-learning": {
    name: "Artificial Intelligence & Machine Learning",
    faculty: [
      {
        id: "aiml-1",
        name: "Dr. Zabiha Khan",
        title: "Associate Professor",
        image: "/lovable-uploads/19a0befa-dd67-4632-a3b9-96634eb147ac.png",
        specialization: ["Software Engineering", "AI & ML", "Data Science & Analytics"],
        email: "zabiha.khan@nmit.ac.in",
        education: "Ph.D in Computer Science",
        research: ["Biomedical Engineering", "Image Processing", "Data Analytics"],
        fullInfo: {
          joiningDate: "2023-10-18",
          experience: "15+ years",
          qualification: "BE, MTech, PhD",
          areaOfInterest: [
            "Software Engineering",
            "Artificial Intelligence and Machine Learning",
            "Data Science & Data Analytics",
            "Biomedical Engineering",
            "Image Processing"
          ],
          projects: ["2 Projects from KITS, Govt. of Karnataka"],
          orcid: "https://orcid.org/0000-0002-4574-0315",
          googleScholar: "https://scholar.google.com/citations?hl=en&user=4aWdcRMAAAAJ",
          linkedin: "https://www.linkedin.com/in/dr-zabiha-khan-40b60429b/"
        }
      },
      {
        id: "aiml-2",
        name: "Ms. Ladly Patel",
        title: "Assistant Professor",
        image: "/lovable-uploads/bc90a6f0-1610-4210-aea4-6e1557cbd28a.png",
        specialization: ["Machine Learning", "Deep Learning", "Computer Vision"],
        email: "ladly.patel@nmit.ac.in",
        education: "BE, MTech (PhD Pursuing)",
        research: ["Big Data Analytics", "Computer Vision", "AI Applications"],
        fullInfo: {
          joiningDate: "2024-11-19",
          experience: "5+ years",
          qualification: "BE, MTech (PhD)",
          areaOfInterest: [
            "Machine Learning", 
            "Deep Learning", 
            "Artificial Intelligence", 
            "Big Data", 
            "Computer Vision"
          ],
          linkedin: "https://in.linkedin.com/in/ladly-patel-543136120"
        }
      }
    ]
  },
  "civil-engineering": {
    name: "Civil Engineering",
    faculty: [
      {
        id: "civil-1",
        name: "Dr. Sumaraj ",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW4lMjBwcm9mZXNzb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Geotechnical Engineering", "Foundation Design", "Soil Mechanics"],
        email: "kavita.nair@example.edu",
        education: "Ph.D in Geotechnical Engineering, University of California Berkeley",
        research: ["Ground Improvement", "Slope Stability", "Geosynthetics"]
      },
      {
        id: "civil-2",
        name: "Dr. Megha Kulkarni ",
        title: "Assistant Professor",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Water Resources", "Environmental Engineering", "Hydraulics"],
        email: "rajiv.khanna@example.edu",
        education: "Ph.D in Environmental Engineering, Technical University of Munich",
        research: ["Urban Water Systems", "Waste Water Treatment", "Climate Adaptation"]
      }
    ]
  },
  "computer-science-engineering": {
    name: "Computer Science & Engineering",
    faculty: [
      {
        id: "cse-1",
        name: "Dr. Avinash L ",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBwcm9mZXNzb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Software Engineering", "Software Testing", "DevOps"],
        email: "neha.kapoor@example.edu",
        education: "Ph.D in Software Engineering, University of California, San Diego",
        research: ["Continuous Integration", "Test Automation", "Microservices"]
      },
      {
        id: "cse-2",
        name: "Dr. Avinash L ",
        title: "Assistant Professor",
        image: "https://images.unsplash.com/photo-1587723958656-ee042cc217a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Algorithms", "Theory of Computation", "Compilers"],
        email: "karthik.iyer@example.edu",
        education: "Ph.D in Computer Science, University of Illinois Urbana-Champaign",
        research: ["Algorithm Optimization", "Programming Languages", "Formal Methods"]
      }
    ]
  },
  "computer-science-business-systems": {
    name: "Computer Science & Business Systems",
    faculty: [
      {
        id: "csbs-1",
        name: "Dr. Mohan Rao",
        title: "Professor & HOD",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwcHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Business Intelligence", "Information Systems", "Enterprise Architecture"],
        email: "mohan.rao@example.edu",
        education: "Ph.D in Information Management, Wharton School",
        research: ["Enterprise Systems", "Digital Transformation", "Business Process Modeling"]
      },
      {
        id: "csbs-2",
        name: "Dr. Lakshmi Menon",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9mZXNzb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Database Systems", "Data Warehousing", "Business Analytics"],
        email: "lakshmi.menon@example.edu",
        education: "Ph.D in Management Information Systems, NYU Stern",
        research: ["Decision Support Systems", "Big Data in Business", "Knowledge Management"]
      },
      {
        id: "csbs-3",
        name: "Dr. Vishal Shah",
        title: "Assistant Professor",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["E-Commerce", "FinTech", "Digital Marketing"],
        email: "vishal.shah@example.edu",
        education: "Ph.D in Technology Management, London School of Economics",
        research: ["Platform Economics", "AI in Business", "Cybersecurity Management"]
      }
    ]
  },
  "electrical-electronics-engineering": {
    name: "Electrical & Electronics Engineering",
    faculty: [
      {
        id: "eee-1",
        name: "Dr. Amruth Ramesh Thelkar",
        title: "Professor",
        image: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Power Systems", "Electric Drives", "Energy Conversion"],
        email: "suresh.menon@example.edu",
        education: "Ph.D in Electrical Engineering, University of Texas Austin",
        research: ["Smart Grids", "Renewable Energy Integration", "Power Electronics"]
      }
      
    ]
  },
  "electronics-communication-engineering": {
    name: "Electronics & Communication Engineering",
    faculty: [
      {
        id: "ece-1",
        name: "Dr. Prasanna Paga",
        title: "Professor ",
        image: "https://images.unsplash.com/photo-1559548331-f9cb98280344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Communication Systems", "Wireless Networks", "Antenna Design"],
        email: "pramod.kumar@example.edu",
        education: "Ph.D in Electronics Engineering, IIT Bombay",
        research: ["5G Technology", "MIMO Systems", "RF Design"]
      },
      {
        id: "ece-2",
        name: "Dr. Badarla Sri Pavan",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFuJTIwcHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Digital Signal Processing", "Image Processing", "Pattern Recognition"],
        email: "ananya.singh@example.edu",
        education: "Ph.D in Signal Processing, TU Delft",
        research: ["Computer Vision", "Multimedia Communication", "Speech Processing"]
      }
    ]
  },
  "electronics-engineering-vlsi": {
    name: "Electronics Engineering (VLSI)",
    faculty: [
      {
        id: "vlsi-1",
        name: "Dr. Aditya Bansal",
        title: "Professor & HOD",
        image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["VLSI Design", "Digital IC Design", "Hardware Security"],
        email: "aditya.bansal@example.edu",
        education: "Ph.D in VLSI, Purdue University",
        research: ["Low Power VLSI", "Hardware Acceleration", "Secure Hardware"]
      },
      {
        id: "vlsi-2",
        name: "Dr. Meera Iyer",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1622214366189-72b19cc61597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWFuJTIwcHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Physical Design", "EDA Tools", "Nanotechnology"],
        email: "meera.iyer@example.edu",
        education: "Ph.D in Nanoelectronics, EPFL",
        research: ["3D IC Design", "Emerging Memory Technology", "Design for Testability"]
      },
      {
        id: "vlsi-3",
        name: "Dr. Vivek Sharma",
        title: "Assistant Professor",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Analog Circuit Design", "RF IC Design", "Mixed Signal Design"],
        email: "vivek.sharma@example.edu",
        education: "Ph.D in Microelectronics, UC Berkeley",
        research: ["Power Management ICs", "Biomedical Circuits", "IoT Sensors"]
      }
    ]
  },
  "information-science-engineering": {
    name: "Information Science & Engineering",
    faculty: [
      {
        id: "ise-1",
        name: "Dr. Archana ",
        title: "Professor",
        image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Information Systems", "Knowledge Management", "Data Mining"],
        email: "ramesh.chandra@example.edu",
        education: "Ph.D in Information Science, University of Washington",
        research: ["Information Retrieval", "Knowledge Graphs", "Semantic Web"]
      },
      {
        id: "ise-2",
        name: "Dr. Manoj",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWFuJTIwcHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Cyber Security", "Network Security", "Cryptography"],
        email: "preeti.mishra@example.edu",
        education: "Ph.D in Security, University of London",
        research: ["Secure Protocols", "Privacy Engineering", "Digital Forensics"]
      }
      
    ]
  },
  "mechanical-engineering": {
    name: "Mechanical Engineering",
    faculty: [
      {
        id: "mech-1",
        name: "Dr. Shailesh Rao ",
        title: "Professor",
        image: "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Thermodynamics", "Heat Transfer", "Energy Systems"],
        email: "ashok.patel@example.edu",
        education: "Ph.D in Mechanical Engineering, MIT",
        research: ["Advanced Heat Exchangers", "Thermal Management", "Energy Efficiency"]
      },
      {
        id: "mech-2",
        name: "Dr. Avinash L",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdvbWFuJTIwcHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Manufacturing Processes", "CAD/CAM", "Additive Manufacturing"],
        email: "sheela.gowda@example.edu",
        education: "Ph.D in Manufacturing, University of Michigan",
        research: ["3D Printing", "Smart Manufacturing", "Industry 4.0"]
      }
      
    ]
  },
  "robotics-artificial-intelligence": {
    name: "Robotics & Artificial Intelligence",
    faculty: [
      {
        id: "rai-1",
        name: "Dr. Prakash Ranjan",
        title: "Professor & HOD",
        image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Robotics", "Control Systems", "AI for Robotics"],
        email: "prakash.ranjan@example.edu",
        education: "Ph.D in Robotics, Carnegie Mellon University",
        research: ["Humanoid Robots", "Robot Manipulation", "Motion Planning"]
      },
      {
        id: "rai-2",
        name: "Dr. Sneha Desai",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1596496356940-0a34ab2f8abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTIwcHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Computer Vision for Robotics", "Perception Systems", "Autonomous Navigation"],
        email: "sneha.desai@example.edu",
        education: "Ph.D in Computer Vision, University of Oxford",
        research: ["SLAM", "Visual Odometry", "3D Reconstruction"]
      },
      {
        id: "rai-3",
        name: "Dr. Varun Mehta",
        title: "Assistant Professor",
        image: "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Human-Robot Interaction", "Social Robotics", "Reinforcement Learning"],
        email: "varun.mehta@example.edu",
        education: "Ph.D in Robotics, TU Munich",
        research: ["Assistive Robots", "Learning from Demonstration", "Robot Ethics"]
      }
    ]
  }
};

export default function FacultyPage() {
  const { department } = useParams<{ department: string }>();
  const departmentData = department ? departmentFaculty[department] : null;
  
  if (!departmentData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto my-24 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Department Not Found</h1>
            <p className="mt-4">The department you're looking for doesn't exist or has been moved.</p>
            <Link to="/#departments">
              <Button className="mt-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Departments
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto my-24 px-4">
        <div className="mb-8">
          <Link 
            to="/#departments" 
            className="inline-flex items-center text-nitte-blue hover:text-nitte-gold transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Departments
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-nitte-blue">
            {departmentData.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Meet our distinguished faculty members who are dedicated to excellence in education and research
            in the field of {departmentData.name}.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentData.faculty.map((faculty) => (
            <Dialog key={faculty.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name} 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-nitte-blue">{faculty.name}</CardTitle>
                  <CardDescription>{faculty.title}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Specialization</h4>
                    <div className="flex flex-wrap gap-2">
                      {faculty.specialization.map((spec, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-50">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Education</h4>
                    <p className="text-sm text-gray-700">{faculty.education}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Research Areas</h4>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                      {faculty.research.map((area, index) => (
                        <li key={index}>{area}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between items-center">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost" className="text-nitte-blue">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">{faculty.email}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  {faculty.fullInfo && (
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        View Full Profile
                      </Button>
                    </DialogTrigger>
                  )}
                </CardFooter>
              </Card>

              {faculty.fullInfo && (
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle className="text-xl">{faculty.name}</DialogTitle>
                    <DialogDescription>{faculty.title}</DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid gap-6 py-4">
                    <div className="flex items-center gap-4">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name} 
                        className="w-24 h-24 rounded-full object-cover border-2 border-gray-100"
                      />
                      <div>
                        <h3 className="font-medium">{faculty.name}</h3>
                        <p className="text-sm text-gray-500">{faculty.title}</p>
                        <p className="text-sm flex items-center mt-1">
                          <Mail className="h-3 w-3 mr-1" />
                          {faculty.email}
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="grid gap-4">
                      {faculty.fullInfo.qualification && (
                        <div className="flex gap-3">
                          <BookOpen className="h-5 w-5 text-nitte-blue flex-shrink-0" />
                          <div>
                            <h4 className="text-sm font-medium">Qualification</h4>
                            <p className="text-sm text-gray-600">{faculty.fullInfo.qualification}</p>
                          </div>
                        </div>
                      )}
                      
                      {faculty.fullInfo.experience && (
                        <div className="flex gap-3">
                          <Briefcase className="h-5 w-5 text-nitte-blue flex-shrink-0" />
                          <div>
                            <h4 className="text-sm font-medium">Experience</h4>
                            <p className="text-sm text-gray-600">{faculty.fullInfo.experience}</p>
                          </div>
                        </div>
                      )}
                      
                      {faculty.fullInfo.joiningDate && (
                        <div className="flex gap-3">
                          <Calendar className="h-5 w-5 text-nitte-blue flex-shrink-0" />
                          <div>
                            <h4 className="text-sm font-medium">Joining Date</h4>
                            <p className="text-sm text-gray-600">{faculty.fullInfo.joiningDate}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {faculty.fullInfo.areaOfInterest && faculty.fullInfo.areaOfInterest.length > 0 && (
                      <>
                        <Separator />
                        <div>
                          <h4 className="text-sm font-medium mb-2">Areas of Interest</h4>
                          <ul className="grid gap-1.5 pl-5 list-disc text-sm text-gray-600">
                            {faculty.fullInfo.areaOfInterest.map((area, index) => (
                              <li key={index}>{area}</li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                    
                    {faculty.fullInfo.projects && faculty.fullInfo.projects.length > 0 && (
                      <>
                        <Separator />
                        <div>
                          <h4 className="text-sm font-medium mb-2">Research Projects</h4>
                          <ul className="grid gap-1.5 pl-5 list-disc text-sm text-gray-600">
                            {faculty.fullInfo.projects.map((project, index) => (
                              <li key={index}>{project}</li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                    
                    {(faculty.fullInfo.linkedin || faculty.fullInfo.orcid || faculty.fullInfo.googleScholar) && (
                      <>
                        <Separator />
                        <div>
                          <h4 className="text-sm font-medium mb-2">Professional Profiles</h4>
                          <div className="flex flex-wrap gap-3">
                            {faculty.fullInfo.linkedin && (
                              <a 
                                href={faculty.fullInfo.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm text-nitte-blue hover:underline"
                              >
                                <Linkedin className="h-4 w-4 mr-1" />
                                LinkedIn
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            )}
                            
                            {faculty.fullInfo.orcid && (
                              <a 
                                href={faculty.fullInfo.orcid} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm text-nitte-blue hover:underline"
                              >
                                <Award className="h-4 w-4 mr-1" />
                                ORCID
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            )}
                            
                            {faculty.fullInfo.googleScholar && (
                              <a 
                                href={faculty.fullInfo.googleScholar} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm text-nitte-blue hover:underline"
                              >
                                <BookOpen className="h-4 w-4 mr-1" />
                                Google Scholar
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
