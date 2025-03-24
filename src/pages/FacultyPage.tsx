
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

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
};

// Department faculty data
const departmentFaculty: Record<string, { name: string; faculty: Faculty[] }> = {
  "aeronautical-engineering": {
    name: "Aeronautical Engineering",
    faculty: [
      {
        id: "aero-1",
        name: "Dr. Rajesh Kumar",
        title: "Professor & HOD",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Aerodynamics", "Flight Mechanics", "Propulsion Systems"],
        email: "rajesh.kumar@example.edu",
        education: "Ph.D in Aerospace Engineering, IIT Kanpur",
        research: ["Flow Control and Optimization", "Aircraft Design", "Computational Fluid Dynamics"]
      },
      {
        id: "aero-2",
        name: "Dr. Priya Singh",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Structural Mechanics", "Composite Materials", "Aircraft Structures"],
        email: "priya.singh@example.edu",
        education: "Ph.D in Mechanical Engineering, University of Michigan",
        research: ["Lightweight Aerospace Structures", "Damage Tolerance", "Material Characterization"]
      },
      {
        id: "aero-3",
        name: "Dr. Arun Sharma",
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
        name: "Dr. Sunita Patel",
        title: "Professor & HOD",
        image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Machine Learning", "Big Data Analytics", "AI Ethics"],
        email: "sunita.patel@example.edu",
        education: "Ph.D in Computer Science, Stanford University",
        research: ["Explainable AI", "Neural Networks", "Decision Support Systems"]
      },
      {
        id: "aids-2",
        name: "Dr. Rahul Mehta",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Natural Language Processing", "Deep Learning", "Computer Vision"],
        email: "rahul.mehta@example.edu",
        education: "Ph.D in Data Science, MIT",
        research: ["Sentiment Analysis", "Image Recognition", "Transformer Models"]
      },
      {
        id: "aids-3",
        name: "Dr. Maya Reddy",
        title: "Assistant Professor",
        image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Data Mining", "Predictive Analytics", "Statistical Learning"],
        email: "maya.reddy@example.edu",
        education: "Ph.D in Statistics, Cambridge University",
        research: ["Anomaly Detection", "Pattern Recognition", "Time Series Analysis"]
      }
    ]
  },
  "artificial-intelligence-machine-learning": {
    name: "Artificial Intelligence & Machine Learning",
    faculty: [
      {
        id: "aiml-1",
        name: "Dr. Vikram Joshi",
        title: "Professor & HOD",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Reinforcement Learning", "Neural Networks", "Cognitive Computing"],
        email: "vikram.joshi@example.edu",
        education: "Ph.D in Computer Science, Carnegie Mellon University",
        research: ["Transfer Learning", "Generative AI", "Multi-agent Systems"]
      },
      {
        id: "aiml-2",
        name: "Dr. Anjali Kumar",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBwcm9mZXNzb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Computer Vision", "Unsupervised Learning", "Robotics"],
        email: "anjali.kumar@example.edu",
        education: "Ph.D in Machine Learning, ETH Zurich",
        research: ["Object Detection", "Self-supervised Learning", "Ethical AI"]
      },
      {
        id: "aiml-3",
        name: "Dr. Sanjay Gupta",
        title: "Assistant Professor",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Federated Learning", "Edge AI", "Privacy-preserving ML"],
        email: "sanjay.gupta@example.edu",
        education: "Ph.D in AI, University of Toronto",
        research: ["Distributed Learning", "Resource-constrained ML", "Quantum Machine Learning"]
      }
    ]
  },
  "civil-engineering": {
    name: "Civil Engineering",
    faculty: [
      {
        id: "civil-1",
        name: "Dr. Deepak Varma",
        title: "Professor & HOD",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Structural Engineering", "Earthquake Resistant Design", "Green Buildings"],
        email: "deepak.varma@example.edu",
        education: "Ph.D in Civil Engineering, IIT Delhi",
        research: ["Sustainable Infrastructure", "Smart Materials", "Disaster Resilient Structures"]
      },
      {
        id: "civil-2",
        name: "Dr. Kavita Nair",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW4lMjBwcm9mZXNzb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Geotechnical Engineering", "Foundation Design", "Soil Mechanics"],
        email: "kavita.nair@example.edu",
        education: "Ph.D in Geotechnical Engineering, University of California Berkeley",
        research: ["Ground Improvement", "Slope Stability", "Geosynthetics"]
      },
      {
        id: "civil-3",
        name: "Dr. Rajiv Khanna",
        title: "Assistant Professor",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Water Resources", "Environmental Engineering", "Hydraulics"],
        email: "rajiv.khanna@example.edu",
        education: "Ph.D in Environmental Engineering, Technical University of Munich",
        research: ["Urban Water Systems", "Waste Water Treatment", "Climate Adaptation"]
      }
    ]
  },
  // Additional departments with similar faculty data structures
  "computer-science-engineering": {
    name: "Computer Science & Engineering",
    faculty: [
      {
        id: "cse-1",
        name: "Dr. Ravindra Sharma",
        title: "Professor & HOD",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Distributed Systems", "Cloud Computing", "Network Security"],
        email: "ravindra.sharma@example.edu",
        education: "Ph.D in Computer Science, Georgia Tech",
        research: ["Scalable Systems", "Edge Computing", "Blockchain Applications"]
      },
      {
        id: "cse-2",
        name: "Dr. Neha Kapoor",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBwcm9mZXNzb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Software Engineering", "Software Testing", "DevOps"],
        email: "neha.kapoor@example.edu",
        education: "Ph.D in Software Engineering, University of California, San Diego",
        research: ["Continuous Integration", "Test Automation", "Microservices"]
      },
      {
        id: "cse-3",
        name: "Dr. Karthik Iyer",
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
        name: "Dr. Suresh Menon",
        title: "Professor & HOD",
        image: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Power Systems", "Electric Drives", "Energy Conversion"],
        email: "suresh.menon@example.edu",
        education: "Ph.D in Electrical Engineering, University of Texas Austin",
        research: ["Smart Grids", "Renewable Energy Integration", "Power Electronics"]
      },
      {
        id: "eee-2",
        name: "Dr. Divya Verma",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBwcm9mZXNzb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Control Systems", "Signal Processing", "Embedded Systems"],
        email: "divya.verma@example.edu",
        education: "Ph.D in Control Engineering, ETH Zurich",
        research: ["Autonomous Systems", "Optimal Control", "System Identification"]
      },
      {
        id: "eee-3",
        name: "Dr. Nikhil Reddy",
        title: "Assistant Professor",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Microelectronics", "VLSI Design", "Semiconductor Devices"],
        email: "nikhil.reddy@example.edu",
        education: "Ph.D in Microelectronics, National University of Singapore",
        research: ["Low Power Design", "Analog Integrated Circuits", "IoT Hardware"]
      }
    ]
  },
  "electronics-communication-engineering": {
    name: "Electronics & Communication Engineering",
    faculty: [
      {
        id: "ece-1",
        name: "Dr. Pramod Kumar",
        title: "Professor & HOD",
        image: "https://images.unsplash.com/photo-1559548331-f9cb98280344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Communication Systems", "Wireless Networks", "Antenna Design"],
        email: "pramod.kumar@example.edu",
        education: "Ph.D in Electronics Engineering, IIT Bombay",
        research: ["5G Technology", "MIMO Systems", "RF Design"]
      },
      {
        id: "ece-2",
        name: "Dr. Ananya Singh",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFuJTIwcHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Digital Signal Processing", "Image Processing", "Pattern Recognition"],
        email: "ananya.singh@example.edu",
        education: "Ph.D in Signal Processing, TU Delft",
        research: ["Computer Vision", "Multimedia Communication", "Speech Processing"]
      },
      {
        id: "ece-3",
        name: "Dr. Rahul Saxena",
        title: "Assistant Professor",
        image: "https://images.unsplash.com/photo-1563889362352-b0492c224f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Embedded Systems", "IoT", "FPGA Design"],
        email: "rahul.saxena@example.edu",
        education: "Ph.D in Computer Engineering, University of Michigan",
        research: ["Edge Computing", "Hardware Security", "Real-time Systems"]
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
        name: "Dr. Ramesh Chandra",
        title: "Professor & HOD",
        image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Information Systems", "Knowledge Management", "Data Mining"],
        email: "ramesh.chandra@example.edu",
        education: "Ph.D in Information Science, University of Washington",
        research: ["Information Retrieval", "Knowledge Graphs", "Semantic Web"]
      },
      {
        id: "ise-2",
        name: "Dr. Preeti Mishra",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWFuJTIwcHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Cyber Security", "Network Security", "Cryptography"],
        email: "preeti.mishra@example.edu",
        education: "Ph.D in Security, University of London",
        research: ["Secure Protocols", "Privacy Engineering", "Digital Forensics"]
      },
      {
        id: "ise-3",
        name: "Dr. Vikas Jain",
        title: "Assistant Professor",
        image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Web Technologies", "Mobile Computing", "Human-Computer Interaction"],
        email: "vikas.jain@example.edu",
        education: "Ph.D in Computer Science, TU Munich",
        research: ["Responsive Design", "Progressive Web Apps", "UX Design"]
      }
    ]
  },
  "mechanical-engineering": {
    name: "Mechanical Engineering",
    faculty: [
      {
        id: "mech-1",
        name: "Dr. Ashok Patel",
        title: "Professor & HOD",
        image: "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Thermodynamics", "Heat Transfer", "Energy Systems"],
        email: "ashok.patel@example.edu",
        education: "Ph.D in Mechanical Engineering, MIT",
        research: ["Advanced Heat Exchangers", "Thermal Management", "Energy Efficiency"]
      },
      {
        id: "mech-2",
        name: "Dr. Sheela Gowda",
        title: "Associate Professor",
        image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdvbWFuJTIwcHJvZmVzc29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        specialization: ["Manufacturing Processes", "CAD/CAM", "Additive Manufacturing"],
        email: "sheela.gowda@example.edu",
        education: "Ph.D in Manufacturing, University of Michigan",
        research: ["3D Printing", "Smart Manufacturing", "Industry 4.0"]
      },
      {
        id: "mech-3",
        name: "Dr. Naveen Kumar",
        title: "Assistant Professor",
        image: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbiUyMHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        specialization: ["Fluid Mechanics", "Dynamics and Control", "MEMS"],
        email: "naveen.kumar@example.edu",
        education: "Ph.D in Fluid Mechanics, Stanford University",
        research: ["Microfluidics", "Turbulence", "Bio-inspired Flow Systems"]
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
            <Card key={faculty.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
              <CardFooter className="border-t pt-4">
                <Button variant="outline" className="w-full">
                  Contact: {faculty.email}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
