import React, { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notificationApi";
import NotificationCard from "../components/NotificationCard";
import PriorityList from "../components/PriorityList";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const data = await fetchNotifications();
    setNotifications(data);
  };

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (item) => item.Type === filter
        );

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Notifications
      </h1>

      {/* Filter Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button onClick={() => setFilter("All")}>
          All
        </button>

        <button onClick={() => setFilter("Event")}>
          Event
        </button>

        <button onClick={() => setFilter("Result")}>
          Result
        </button>

        <button onClick={() => setFilter("Placement")}>
          Placement
        </button>
      </div>

      {/* Priority Notifications */}
      <PriorityList notifications={notifications} />

      <hr
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />

      {/* Notification Cards */}
      {filteredNotifications.length > 0 ? (
        filteredNotifications.map((item) => (
          <NotificationCard
            key={item.ID}
            notification={item}
          />
        ))
      ) : (
        <h3 style={{ textAlign: "center" }}>
          No Notifications Found
        </h3>
      )}
    </div>
  );
};

export default Notifications;