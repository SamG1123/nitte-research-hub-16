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
    scopusId?: string;
    researchGate?: string;
    webOfScienceId?: string;
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
        name: "Mr. Siddalingappa PK",
        title: "Assistant Professor",
        image: "/lovable-uploads/5cb38291-c474-43fb-9e32-ff72b8599e42.png",
        specialization: ["Aerodynamics", "Computational Fluid Dynamics"],
        email: "siddalingappa.pk@nmit.ac.in",
        education: "B.E., M. Tech (Aero)",
        research: ["Aerodynamics", "Computational Fluid Dynamics"],
        fullInfo: {
          joiningDate: "2015-01-19",
          experience: "5+ Years",
          qualification: "B.E., M. Tech (Aero)",
          areaOfInterest: [
            "Aerodynamics",
            "Computational Fluid Dynamics"
          ],
          projects: ["Design and Development of Amphibious Drone, funded by Naval Science & Technological Laboratory (NSTL) - DRDO, Vizag of 9.44Lakhs"],
          webOfScienceId: "ADE-3929-2022",
          scopusId: "57210597356",
          orcid: "https://orcid.org/0000-0001-5712-4555",
          researchGate: "https://www.researchgate.net/profile/Siddalingappa-Pk",
          googleScholar: "https://scholar.google.com/citations?user=5Vz7Y-0AAAAJ&hl",
          linkedin: "https://www.linkedin.com/in/siddalingappa-p-kodigaddi-a5928789/"
        }
      },
      {
        id: "aero-2",
        name: "Dr. Sambhaji Lore",
        title: "Assistant Professor",
        image: "/lovable-uploads/792bcc73-f88c-41ad-b0ea-79ed018da3e3.png",
        specialization: ["Composite Structures", "Non-linear Analysis", "Uncertainty Quantification"],
        email: "sambhaji.sl@nmit.ac.in",
        education: "B.Tech. (AeSI), M.Tech. (IIT Kharagpur), Ph.D. (IIT Kharagpur)",
        research: ["Finite Element Methods", "Surrogate Methods", "Artificial Intelligence"],
        fullInfo: {
          joiningDate: "2022-07-07",
          experience: "1+ Years",
          qualification: "B.Tech. (AeSI), M.Tech. (IIT Kharagpur), Ph.D. (IIT Kharagpur)",
          areaOfInterest: [
            "Composite Structures",
            "Non-linear Analysis",
            "Uncertainty Quantification",
            "Reliability Analysis",
            "Finite Element Methods",
            "Surrogate Methods",
            "Artificial Intelligence"
          ],
          googleScholar: "https://scholar.google.com/citations?user=bZc6YDkAAAAJ&hl=en",
          scopusId: "https://www.scopus.com/authid/detail.uriauthorId=57203853268",
          orcid: "https://orcid.org/0000-0002-1380-5698",
          researchGate: "https://www.researchgate.net/profile/Sambhaji-Lore",
          linkedin: "https://www.linkedin.com/in/dr-sambhaji-lore-ab4213106/"
        }
      },
      {
        id: "aero-3",
        name: "Mr. Mallappa J",
        title: "Assistant Professor",
        image: "/lovable-uploads/34b9eda8-0001-4768-acf5-b1bc923452ca.png",
        specialization: ["Aerospace Propulsion", "Machine Learning", "Multi-Sensor data fusion Technique"],
        email: "mallappa.jabade@nmit.ac.in",
        education: "B.E, M.Tech",
        research: ["Aerospace Propulsion", "Machine Learning", "Multi-Sensor data fusion Technique"],
        fullInfo: {
          joiningDate: "2022-12-14",
          experience: "1+ years",
          qualification: "B.E, M.Tech",
          areaOfInterest: [
            "Aerospace Propulsion",
            "Machine Learning",
            "Multi-Sensor data fusion Technique"
          ],
          orcid: "https://orcid.org/0009-0007-4963-3019",
          googleScholar: "https://scholar.google.com/citations?user=IusXYwYAAAAJ&hl=en",
          linkedin: "https://www.linkedin.com/in/mallappa-jabade-18a9a5216/"
        }
      }
    ]
  },
  
  // ... keep existing code (for other departments)
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
                    
                    {(faculty.fullInfo.linkedin || faculty.fullInfo.orcid || faculty.fullInfo.googleScholar || 
                      faculty.fullInfo.researchGate || faculty.fullInfo.scopusId || faculty.fullInfo.webOfScienceId) && (
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

                            {faculty.fullInfo.researchGate && (
                              <a 
                                href={faculty.fullInfo.researchGate} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm text-nitte-blue hover:underline"
                              >
                                <BookOpen className="h-4 w-4 mr-1" />
                                ResearchGate
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            )}

                            {faculty.fullInfo.scopusId && (
                              <a 
                                href={faculty.fullInfo.scopusId} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm text-nitte-blue hover:underline"
                              >
                                <BookOpen className="h-4 w-4 mr-1" />
                                Scopus
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            )}

                            {faculty.fullInfo.webOfScienceId && (
                              <p className="inline-flex items-center text-sm text-nitte-blue">
                                <BookOpen className="h-4 w-4 mr-1" />
                                Web of Science ID: {faculty.fullInfo.webOfScienceId}
                              </p>
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
