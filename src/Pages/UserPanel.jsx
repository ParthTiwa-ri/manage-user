// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useAccounts } from "../Context/AccountsContext";
import "./UserPanel.css";
import Sidebar from "../Component/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function UserPanel() {
  // const location = useLocation();
  // const { account } = location.state || {};

  // const navigate = useNavigate();

  return (
    <div className="app">
      <div className="glass">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default UserPanel;
