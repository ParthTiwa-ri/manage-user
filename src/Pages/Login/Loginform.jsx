/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import "./Login.css";

function LoginForm({
  username,
  password,
  error,
  handleUsernameChange,
  handlePasswordChange,
  handleSubmit,
}) {
  return (
    <>
      {/* Render Navbar */}
      <Navbar />

      <div className="wrapper">
        <div className="loginForm">
          <h1>Login</h1>
          {/* Error message display */}
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSubmit}>
            {/* Username input */}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            {/* Password input */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
          {/* Link to signup page */}
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

export default LoginForm;
