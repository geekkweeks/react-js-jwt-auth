import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const user = useAuth();
  const location = useLocation();
  return user?.token ? (
    <Outlet />
  ) : (
    // history of navigation
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
