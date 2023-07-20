import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/Auth/AuthContextPovider";

const RequireAuth = () => {
  const { token } = useAuth();
  const location = useLocation();

  return token ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireAuth;
