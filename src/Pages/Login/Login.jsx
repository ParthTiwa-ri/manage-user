import { useEffect, useState } from "react";
import { useAccounts } from "../../Context/AccountsContext";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginForm from "./Loginform";

function Login() {
  // State variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State variable for error

  // Hooks
  const { accounts, setCurrAcc } = useAccounts();
  const { isAuthenticated, setAuthenticated } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Effects
  useEffect(() => {
    // Redirect to user panel if already authenticated
    if (isAuthenticated) navigate("/userpanel");
  }, [isAuthenticated, navigate]);

  // Event handlers
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (!username || !password) {
      setError("Please enter both username and password."); // Set error message
      return;
    }

    // Search for the account by username
    const acc = accounts.find((item) => item.username === username);

    if (acc && acc.password === password) {
      // Check if account exists and password matches
      alert("Successful login");
      setCurrAcc(acc); // Set current account
      setAuthenticated(true); // Set authentication status to true

      // Navigate to the dashboard page with current account data
      navigate("/userpanel");
    } else {
      setError("Wrong Username or Password"); // Set error message
    }
  };

  return (
    <LoginForm
      {...{
        username,
        password,
        error,
        handleUsernameChange,
        handlePasswordChange,
        handleSubmit,
      }}
    />
  );
}

export default Login;
