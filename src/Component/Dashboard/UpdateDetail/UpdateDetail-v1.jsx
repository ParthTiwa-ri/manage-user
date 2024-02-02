import { useState } from "react";
import "./UpdateDetail";
import { useAccounts } from "../../../Context/AccountsContext";
function UpdateDetail() {
  const [message, setMessage] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const { accounts, setAccounts, currAcc, setCurrAcc } = useAccounts();

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUsername === "") {
      setMessage("Please enter a new username.");
    } else {
      const updatedAccounts = accounts.map((item) => {
        if (item.username === currAcc.username) {
          // Update the username of the current account
          const updateDetail = { ...item, username: newUsername };
          setCurrAcc(updateDetail);
          return updateDetail;
        }
        return item;
      });

      // Update the accounts state with the updated list
      setAccounts(updatedAccounts);
      setMessage("Username updated successfully.");
      // Clear the input field
      setNewUsername("");
      // Navigate back to the dashboard with the updated account information
      // navigate("/dashboard", {
      //   state: { account: { ...account, username: newUsername } },
      // });
    }
  };
  console.log(currAcc);
  return (
    <>
      {currAcc && (
        <div>
          <div className="title"></div>

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

export default UpdateDetail;
