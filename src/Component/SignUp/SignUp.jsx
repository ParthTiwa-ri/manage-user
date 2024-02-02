import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useAccounts } from "../../Context/AccountsContext";
import Navbar from "../Navbar/Navbar";
import { useAuth } from "../../Context/AuthContext";

function SignUp() {
  // State variables for form inputs and error
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [hobby, setHobby] = useState("");
  const [error, setError] = useState(""); // State variable for error

  // Accessing accounts context and navigation functionality
  const { accounts, setAccounts } = useAccounts();
  const navigate = useNavigate();

  // Accessing authentication context to set authentication status
  const { setAuthenticated } = useAuth();
  setAuthenticated(false); // Set authentication status to false initially

  // Function to add a new account to the list of accounts
  function addAccount(newuser) {
    setAccounts((acc) => [...acc, newuser]);
  }

  // Event handlers for form input changes
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

  // Function to handle form submission
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

    // Check if the username already exists
    if (accounts.find((item) => item.username === username)) {
      setError("Username already exists"); // Set error message
    } else {
      // Add the new user to the list of accounts
      addAccount(newuser);
      // Display success message
      alert("Successfully Signed Up");
      // Redirect to login page
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <div className="wrapper">
        <div className="signUpForm">
          {/* Sign-up form */}
          <form onSubmit={handleSubmit}>
            <h2>Registration</h2>
            {/* Error message display */}
            {error && <div className="error">{error}</div>}
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
          {/* Link to login page */}
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
