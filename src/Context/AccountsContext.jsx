/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

// Step 1: Create a context
const AccountsContext = createContext();

// Step 2: Create a provider component
export const AccountsProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [currAcc, setCurrAcc] = useState(null);

  return (
    // Step 3: Wrap your application with the provider
    <AccountsContext.Provider
      value={{ accounts, setAccounts, currAcc, setCurrAcc }}
    >
      {children}
    </AccountsContext.Provider>
  );
};

// Step 4: Create a custom hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
export const useAccounts = () => {
  const context = useContext(AccountsContext);
  if (context === undefined)
    throw new Error("AccountProvider was used ouside of it context");
  else return context;
};
