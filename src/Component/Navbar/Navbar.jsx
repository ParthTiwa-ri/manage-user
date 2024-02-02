import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Made By Parth</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signUp">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
