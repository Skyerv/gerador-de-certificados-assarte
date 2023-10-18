import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const auth = getAuth();
  if (!auth.currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
