import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

function ProtectedRoute({ children }) {
  const { user } = useAuthStore();
  return user ? children : <Navigate to='/login' replace />;
}

export default ProtectedRoute;
