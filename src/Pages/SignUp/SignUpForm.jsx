/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import "./SignUp.css";

function SignUpForm({
  fullName,
  username,
  password,
  mobileNumber,
  address,
  hobby,
  error,
  handleFullNameChange,
  handleUsernameChange,
  handlePasswordChange,
  handleMobileNumberChange,
  handleAddressChange,
  handleHobbyChange,
  handleSubmit,
}) {
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

export default SignUpForm;
