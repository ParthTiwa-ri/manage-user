import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAccounts } from "../../Context/AccountsContext";
import Navbar from "../Navbar/Navbar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { accounts } = useAccounts();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currAcc = accounts.find((item) => item.username === username);

    if (currAcc && currAcc.password === password) {
      alert("Successful login");

      // Navigate to the dashboard page with current account data
      navigate("/dashboard", { state: { account: currAcc } });
    } else {
      console.log("Unsuccessful login");
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
