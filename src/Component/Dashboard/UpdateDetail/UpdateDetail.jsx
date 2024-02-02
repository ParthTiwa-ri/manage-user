import { useState } from "react";
import { useAccounts } from "../../../Context/AccountsContext";
import "./UpdateDetail.css";

function UpdateDetail() {
  const [message, setMessage] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newMobileNumber, setNewMobileNumber] = useState("");
  const [newHobby, setNewHobby] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const { accounts, setAccounts, currAcc, setCurrAcc } = useAccounts();

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setNewMobileNumber(e.target.value);
  };

  const handleHobbyChange = (e) => {
    setNewHobby(e.target.value);
  };

  const handleAddressChange = (e) => {
    setNewAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newUsername && !newMobileNumber && !newHobby && !newAddress) {
      setMessage("Please insert at least one information.");
      return;
    }

    const updatedAccounts = accounts.map((item) => {
      if (item.username === currAcc.username) {
        const updatedDetail = {
          ...item,
          fullName: newUsername || item.fullName,
          mobileNumber: newMobileNumber || item.mobileNumber,
          hobby: newHobby || item.hobby,
          address: newAddress || item.address,
        };
        setCurrAcc(updatedDetail);
        return updatedDetail;
      }
      return item;
    });

    setAccounts(updatedAccounts);
    setMessage("Details updated successfully.");
    setNewUsername("");
    setNewMobileNumber("");
    setNewHobby("");
    setNewAddress("");
  };

  return (
    <>
      {currAcc && (
        <div className="form-container vertical-center-item ">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="newUsername">New Username:</label>
              <input
                type="text"
                id="newUsername"
                value={newUsername}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newMobileNumber">New Mobile Number:</label>
              <input
                type="text"
                id="newMobileNumber"
                value={newMobileNumber}
                onChange={handleMobileNumberChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newHobby">New Hobby:</label>
              <input
                type="text"
                id="newHobby"
                value={newHobby}
                onChange={handleHobbyChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newAddress">New Address:</label>
              <input
                type="text"
                id="newAddress"
                value={newAddress}
                onChange={handleAddressChange}
              />
            </div>
            <button type="submit" className="submit-btn">
              Update Details
            </button>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      )}
    </>
  );
}

export default UpdateDetail;
