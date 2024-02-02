import { useAccounts } from "../../../Context/AccountsContext";
import "./Dashboard.css"; // Import the CSS file

function Dashboard() {
  const { currAcc } = useAccounts();
  return (
    <div className="dashboard-container vertical-center-item">
      <div className="dashboard-header">
        <div className="title">
          <h2>Welcome</h2>
          <span>{currAcc?.fullName}</span>
        </div>
      </div>
      <div className="dashboard-details">
        <p>
          Username: <span>{currAcc?.username}</span>
        </p>
        <p>
          Mobile Number: <span>{currAcc?.mobileNumber}</span>
        </p>
        <p>
          Hobby: <span>{currAcc?.hobby}</span>
        </p>
        <p>
          Address: <span>{currAcc?.address}</span>
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
