import { PrivateRoutes } from "@/@types";
import { useAuth } from "@/hooks";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const PublicRoute = ({ children }: Props) => {
  const { user } = useAuth();
  return user ? <Navigate to={`/${PrivateRoutes.PRIVATE}`} /> : <>{children}</>;
};

export default PublicRoute;
