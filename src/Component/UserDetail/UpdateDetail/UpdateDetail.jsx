import { useState } from "react";
import { useAccounts } from "../../../Context/AccountsContext";
import "./UpdateDetail.css";

function UpdateDetail() {
  // State variables for form fields and message
  const [message, setMessage] = useState("");
  const [newFullname, setNewFullname] = useState("");
  const [newMobileNumber, setNewMobileNumber] = useState("");
  const [newHobby, setNewHobby] = useState("");
  const [newAddress, setNewAddress] = useState("");

  // Destructure context and update functions from AccountsContext
  const { accounts, setAccounts, currAcc, setCurrAcc } = useAccounts();

  // Event handlers for form inputs
  const handleFullnameChange = (e) => setNewFullname(e.target.value);
  const handleMobileNumberChange = (e) => setNewMobileNumber(e.target.value);
  const handleHobbyChange = (e) => setNewHobby(e.target.value);
  const handleAddressChange = (e) => setNewAddress(e.target.value);

  // Function to validate phone number
  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if at least one information is provided
    if (!newFullname && !newMobileNumber && !newHobby && !newAddress) {
      setMessage("Please insert at least one information.");
      return;
    }

    // Validate phone number
    if (newMobileNumber && !validatePhoneNumber(newMobileNumber)) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    // Update account details
    const updatedAccounts = accounts.map((item) => {
      if (item.username === currAcc.username) {
        const updatedDetail = {
          ...item,
          fullName: newFullname || item.fullName,
          mobileNumber: newMobileNumber || item.mobileNumber,
          hobby: newHobby || item.hobby,
          address: newAddress || item.address,
        };
        setCurrAcc(updatedDetail);
        return updatedDetail;
      }
      return item;
    });

    // Update accounts state, reset form fields, and display success message
    setAccounts(updatedAccounts);
    setMessage("Details updated successfully.");
    setNewFullname("");
    setNewMobileNumber("");
    setNewHobby("");
    setNewAddress("");
  };

  return (
    <>
      {/* Render form only if current account exists */}
      {currAcc && (
        <div className="form-container vertical-center-item">
          <form onSubmit={handleSubmit}>
            {/* Full Name input */}
            <div className="form-group">
              <label htmlFor="newFullname">New Full Name:</label>
              <input
                type="text"
                placeholder="Leave Blank if want no Change"
                id="newFullname"
                value={newFullname}
                onChange={handleFullnameChange}
              />
            </div>
            {/* Mobile Number input */}
            <div className="form-group">
              <label htmlFor="newMobileNumber">New Mobile Number:</label>
              <input
                type="text"
                placeholder="Leave Blank if want no Change"
                id="newMobileNumber"
                value={newMobileNumber}
                onChange={handleMobileNumberChange}
              />
            </div>
            {/* Hobby input */}
            <div className="form-group">
              <label htmlFor="newHobby">New Hobby:</label>
              <input
                type="text"
                id="newHobby"
                placeholder="Leave Blank if want no Change"
                value={newHobby}
                onChange={handleHobbyChange}
              />
            </div>
            {/* Address input */}
            <div className="form-group">
              <label htmlFor="newAddress">New Address:</label>
              <input
                type="text"
                id="newAddress"
                placeholder="Leave Blank if want no Change"
                value={newAddress}
                onChange={handleAddressChange}
              />
            </div>
            {/* Submit button */}
            <button type="submit" className="submit-btn">
              Update Details
            </button>
          </form>
          {/* Display message if exists */}
          {message && <p className="message">{message}</p>}
        </div>
      )}
    </>
  );
}

export default UpdateDetail;
