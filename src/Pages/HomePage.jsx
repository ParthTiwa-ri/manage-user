import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Application</h1>
      <nav style={styles.nav}>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <Link to="/signup" style={styles.link}>
              Signup
            </Link>
          </li>
          <li style={styles.listItem}>
            <Link to="/login" style={styles.link}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    margin: "50px auto",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  nav: {
    marginTop: "20px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  listItem: {
    display: "inline-block",
    marginRight: "10px",
  },
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "16px",
  },
};

export default HomePage;
