import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Notification Dashboard</h1>

      <p>AffordMed Notification System</p>

      <Link to="/notifications">
        <button>
          View Notifications
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;