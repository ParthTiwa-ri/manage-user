import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useAccounts } from "../../Context/AccountsContext";

function Login() {
  // Define state variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { accounts } = useAccounts();

  // Handler function to update the username state
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Handler function to update the password state
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const currAcc = accounts.find((item) => item.username === username);

    if (currAcc && currAcc.password === password) {
      console.log("sucessful");
    } else {
      console.log("unsuccesfull");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
          {/* Controlled input for username */}
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={handleUsernameChange}
          />
          {/* Controlled input for password */}
          <input
            type="password"
            placeholder="password"
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
    </>
  );
}

export default Login;
