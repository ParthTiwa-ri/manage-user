/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";

const AccountsContext = createContext();

export const AccountsProvider = ({ children }) => {
  // Load accounts and currAcc state from localStorage or use default values
  const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
  const storedCurrAcc = JSON.parse(localStorage.getItem("currAcc")) || null;

  // Set up state variables for accounts and currAcc
  const [accounts, setAccounts] = useState(storedAccounts);
  const [currAcc, setCurrAcc] = useState(storedCurrAcc);

  // Use useEffect to save accounts state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  //  Use useEffect to save currAcc state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("currAcc", JSON.stringify(currAcc));
  }, [currAcc]);

  return (
    // Wrap your application with the provider
    <AccountsContext.Provider
      value={{ accounts, setAccounts, currAcc, setCurrAcc }}
    >
      {children}
    </AccountsContext.Provider>
  );
};

// Step 6: Create a custom hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
export const useAccounts = () => {
  const context = useContext(AccountsContext);
  // Throw an error if the hook is used outside of the AccountsProvider
  if (context === undefined)
    throw new Error("useAccounts must be used within an AccountsProvider");
  else return context;
};
