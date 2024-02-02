import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import { useAccounts } from "../../Context/AccountsContext";
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

    // Check if any field is empty
    if (
      !fullName ||
      !username ||
      !password ||
      !mobileNumber ||
      !address ||
      !hobby
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // Validate mobile number format
    const mobileNumberRegex = /^\d{10}$/;
    if (!mobileNumberRegex.test(mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Check if the username already exists
    if (accounts.find((item) => item.username === username)) {
      setError("Username already exists");
      return;
    }

    // If all validations pass, create a new user
    const newuser = {
      fullName,
      username,
      password,
      mobileNumber,
      address,
      hobby,
    };

    // Add the new user to the list of accounts
    addAccount(newuser);
    // Display success message
    alert("Successfully Signed Up");
    // Redirect to login page
    navigate("/login");
  };

  return (
    <SignUpForm
      fullName={fullName}
      username={username}
      password={password}
      mobileNumber={mobileNumber}
      address={address}
      hobby={hobby}
      error={error}
      handleFullNameChange={handleFullNameChange}
      handleUsernameChange={handleUsernameChange}
      handlePasswordChange={handlePasswordChange}
      handleMobileNumberChange={handleMobileNumberChange}
      handleAddressChange={handleAddressChange}
      handleHobbyChange={handleHobbyChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default SignUp;
