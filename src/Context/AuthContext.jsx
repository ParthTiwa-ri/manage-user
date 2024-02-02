/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const intital = JSON.parse(localStorage.getItem("isAuthenticated")) || false;
  const [isAuthenticated, setAuthenticated] = useState(intital);

  useEffect(() => {
    // Save account state to local storage whenever it changes
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);
  return (
    // Step 3: Wrap your application with the provider
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AccountProvider was used ouside of it context");
  else return context;
};
