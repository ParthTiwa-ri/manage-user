import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useAccounts } from "../../Context/AccountsContext";
import Navbar from "../Navbar/Navbar";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [hobby, setHobby] = useState("");
  const { accounts, setAccounts } = useAccounts();
  const navigate = useNavigate();

  function addAccount(newuser) {
    setAccounts((acc) => [...acc, newuser]);
  }

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleHobbyChange = (e) => {
    setHobby(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newuser = {
      fullName,
      username,
      password,
      mobileNumber,
      address,
      hobby,
    };
    if (accounts.find((item) => item.username === username)) {
      alert("Username already exists");
    } else {
      addAccount(newuser);
      alert("Succesfully Signup");
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="signUpForm">
          <form onSubmit={handleSubmit}>
            <h2>Registration</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={handleAddressChange}
              required
            />
            <input
              type="text"
              placeholder="Hobby"
              value={hobby}
              onChange={handleHobbyChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
          <div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
