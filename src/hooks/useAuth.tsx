import { useContext } from "react";
import { AuthContextValue } from "../@types/Auth";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Theres is not auth provider");
  return context;
};

export default useAuth;
