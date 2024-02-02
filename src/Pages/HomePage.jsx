import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import "./HomePage.css"; // Import the CSS file

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="heading">Welcome to Our Application</h1>
        <nav className="nav">
          <ul className="list">
            <li className="listItem">
              <Link to="/signup" className="link signupButton">
                Signup
              </Link>
            </li>
            <li className="listItem">
              <Link to="/login" className="link loginButton">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default HomePage;
