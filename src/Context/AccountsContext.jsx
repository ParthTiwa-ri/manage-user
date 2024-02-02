/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";

const AccountsContext = createContext();

export const AccountsProvider = ({ children }) => {
  const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
  const storedCurrAcc = JSON.parse(localStorage.getItem("currAcc")) || null;
  const [accounts, setAccounts] = useState(storedAccounts);
  const [currAcc, setCurrAcc] = useState(storedCurrAcc);

  useEffect(() => {
    // Save account state to local storage whenever it changes
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  useEffect(() => {
    // Save currAcc state to local storage whenever it changes
    localStorage.setItem("currAcc", JSON.stringify(currAcc));
  }, [currAcc]);

  return (
    <AccountsContext.Provider
      value={{ accounts, setAccounts, currAcc, setCurrAcc }}
    >
      {children}
    </AccountsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAccounts = () => {
  const context = useContext(AccountsContext);
  if (context === undefined)
    throw new Error("useAccounts must be used within an AccountsProvider");
  return context;
};
