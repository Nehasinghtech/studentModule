import { Navigate, Outlet } from "react-router-dom";

const TeacherProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" replace />;
  if (role !== "teacher") return <Navigate to="/signup" replace />;

  return <Outlet />;
};

export default TeacherProtectedRoute;
