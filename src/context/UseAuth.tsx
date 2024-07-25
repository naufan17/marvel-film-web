import { useContext } from "react";
import { AuthContext, AuthContextType } from './AuthContext';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("use Auth must be used within an AuthProvider")
  }

  return context;
}