import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAccounts } from "../../Context/AccountsContext";
import Navbar from "../Navbar/Navbar";
import { useAuth } from "../../Context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { accounts, setCurrAcc } = useAccounts();
  const { isAuthenticated, setAuthenticated } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(
    function () {
      if (isAuthenticated) navigate("/userpanel");
    },
    [isAuthenticated, navigate]
  );

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const acc = accounts.find((item) => item.username === username);

    if (acc && acc.password === password) {
      alert("Successful login");
      setCurrAcc(acc);
      setAuthenticated(true);
      // Navigate to the dashboard page with current account data
      navigate("/userpanel");
    } else {
      alert("Wrong Username or Password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="loginForm">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit">Submit</button>
          </form>
          <div>
            <p>
              Dont have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
