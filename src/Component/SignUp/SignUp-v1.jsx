// import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";
import { useAccounts } from "../../Context/AccountsContext";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { accounts, setAccounts } = useAccounts();

  const navigate = useNavigate();

  function addAccount(newuser) {
    setAccounts((acc) => [...acc, newuser]);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newuser = {
      username,
      password,
    };
    if (accounts.find((item) => item.username == username)) {
      console.log("username exists");
    } else {
      addAccount(newuser);

      navigate("/login");
    }
  };

  return (
    <>
      <h1>SignUp</h1>
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={handleUsernameChange}
          />
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
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
