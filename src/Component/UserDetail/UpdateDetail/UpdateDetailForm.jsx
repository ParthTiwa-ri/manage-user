/* eslint-disable react/prop-types */
import "./UpdateDetail.css";

function UpdateDetailForm({
  newFullname,
  newMobileNumber,
  newHobby,
  newAddress,
  message,
  handleFullnameChange,
  handleMobileNumberChange,
  handleHobbyChange,
  handleAddressChange,
  handleSubmit,
  currAcc,
}) {
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

export default UpdateDetailForm;
