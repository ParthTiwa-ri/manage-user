import "./UserPanel.css";
import Sidebar from "../Component/UserDetail/Sidebar/Sidebar";
import { Outlet } from "react-router-dom"; // Import Outlet component for nested routing

function UserPanel() {
  return (
    <div className="app">
      <div className="glass">
        <Sidebar /> {/* Render Sidebar component */}
        <Outlet /> {/* Render nested routes */}
      </div>
    </div>
  );
}

export default UserPanel;
