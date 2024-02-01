import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAccounts } from "../Context/AccountsContext";

function Dashboard() {
  const location = useLocation();
  const { account } = location.state || {};
  const [newUsername, setNewUsername] = useState("");
  const [message, setMessage] = useState("");
  const { accounts, setAccounts } = useAccounts();
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUsername === "") {
      setMessage("Please enter a new username.");
    } else {
      const updatedAccounts = accounts.map((item) => {
        if (item.username === account.username) {
          // Update the username of the current account
          return { ...item, username: newUsername };
        }
        return item;
      });

      // Update the accounts state with the updated list
      setAccounts(updatedAccounts);
      setMessage("Username updated successfully.");
      // Clear the input field
      setNewUsername("");
      // Navigate back to the dashboard with the updated account information
      navigate("/dashboard", {
        state: { account: { ...account, username: newUsername } },
      });
    }
  };

  return (
    <>
      <h1>Welcome to Dashboard</h1>
      {account && (
        <div>
          <h2>User Details</h2>
          <p>Username: {account.username}</p>
          {/* Form to update username */}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="newUsername">New Username:</label>
              <input
                type="text"
                id="newUsername"
                value={newUsername}
                onChange={handleUsernameChange}
              />
            </div>
            <button type="submit">Update Username</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      )}
    </>
  );
}

export default Dashboard;
