
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Download, Eye } from "lucide-react";

export function ProjectReports({ reports }) {
  // Function to determine the icon based on report type
  const getReportTypeIcon = (type) => {
    switch (type) {
      case "quarterly":
        return <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Quarterly</span>;
      case "milestone":
        return <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Milestone</span>;
      case "final":
        return <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Final</span>;
      case "presentation":
        return <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">Presentation</span>;
      default:
        return <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Document</span>;
    }
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-nitte-blue flex items-center">
          <FileText className="mr-2 h-5 w-5" /> Project Reports
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Size</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{report.title}</TableCell>
                <TableCell>{getReportTypeIcon(report.type)}</TableCell>
                <TableCell>{report.date}</TableCell>
                <TableCell>{report.fileSize}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-1 rounded-md hover:bg-gray-100">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="p-1 rounded-md hover:bg-gray-100">
                      <Download className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
