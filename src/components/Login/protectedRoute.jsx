import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./authContext";

export default function ProtectedRoute() {
  const { user } = useAuth();
  const location = useLocation();

  // Se NÃO estiver logado → manda para login, salvando o destino
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Se estiver logado → libera
  return <Outlet />;
}

