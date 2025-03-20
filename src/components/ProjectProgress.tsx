
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectProgressProps {
  progress: number;
  milestones: {
    title: string;
    description: string;
    status: "completed" | "in-progress" | "pending";
    date: string;
  }[];
}

export function ProjectProgress({ progress, milestones }: ProjectProgressProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-nitte-blue flex items-center justify-between">
          Project Progress
          <span className="text-2xl font-bold">{progress}%</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress 
          value={progress} 
          className="h-3 mb-8" 
        />
        
        <div className="space-y-6">
          <h3 className="font-medium text-gray-800">Milestones</h3>
          
          <div className="relative border-l-2 border-gray-200 pl-6 pb-2 space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className={`absolute -left-[29px] w-6 h-6 rounded-full flex items-center justify-center 
                  ${milestone.status === "completed" ? "bg-green-500" : 
                    milestone.status === "in-progress" ? "bg-amber-500" : "bg-gray-300"}`}
                >
                  {milestone.status === "completed" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : milestone.status === "in-progress" ? (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  ) : (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                
                <div className="mb-1 flex items-center justify-between">
                  <h4 className="font-medium text-gray-800">{milestone.title}</h4>
                  <span className="text-xs text-gray-500">{milestone.date}</span>
                </div>
                <p className="text-sm text-gray-600">{milestone.description}</p>
                
                <span className={`text-xs font-medium inline-block px-2 py-1 rounded-full mt-2
                  ${milestone.status === "completed" ? "bg-green-100 text-green-800" : 
                    milestone.status === "in-progress" ? "bg-amber-100 text-amber-800" : 
                    "bg-gray-100 text-gray-800"}`}
                >
                  {milestone.status === "completed" ? "Completed" : 
                   milestone.status === "in-progress" ? "In Progress" : "Pending"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
