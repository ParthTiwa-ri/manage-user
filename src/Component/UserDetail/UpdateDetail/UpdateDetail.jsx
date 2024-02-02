import { useState } from "react";
import { useAccounts } from "../../../Context/AccountsContext";
import UpdateDetailForm from "./UpdateDetailForm";

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
    <UpdateDetailForm
      newFullname={newFullname}
      newMobileNumber={newMobileNumber}
      newHobby={newHobby}
      newAddress={newAddress}
      message={message}
      handleFullnameChange={handleFullnameChange}
      handleMobileNumberChange={handleMobileNumberChange}
      handleHobbyChange={handleHobbyChange}
      handleAddressChange={handleAddressChange}
      handleSubmit={handleSubmit}
      currAcc={currAcc}
    />
  );
}

export default UpdateDetail;
