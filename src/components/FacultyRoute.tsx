
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function FacultyRoute() {
  const { isFaculty, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-nitte-blue"></div>
      </div>
    );
  }

  // Make sure to call isFaculty as a function
  if (!isFaculty()) {
    // Redirect to dashboard with access denied message
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
