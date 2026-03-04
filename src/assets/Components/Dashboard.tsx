import React, { useState } from "react";
import Card from "./Card";

const data = [
  { title: "Work", hours: 32, lastWeek: 36, color: "hsl(15, 100%, 70%)" },
  { title: "Play", hours: 10, lastWeek: 8, color: "hsl(195, 74%, 62%)" },
  { title: "Study", hours: 4, lastWeek: 7, color: "hsl(348, 100%, 68%)" },
  { title: "Exercise", hours: 4, lastWeek: 5, color: "hsl(145, 58%, 55%)" },
  { title: "Social", hours: 5, lastWeek: 10, color: "hsl(264, 64%, 52%)" },
  { title: "Self Care", hours: 2, lastWeek: 2, color: "hsl(43, 84%, 65%)" },
];

const Dashboard: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("Weekly");
  const [showModal, setShowModal] = useState(false);

  const handleClick = (menu: string) => {
    setActiveMenu(menu);
    setShowModal(true); // show modal
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f1424",
        padding: "20px",
        color: "white",
        position: "relative",
      }}
    >
      {/* MENU */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        {["Daily", "Weekly", "Monthly"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            style={{
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor:
                activeMenu === item ? "#5746ea" : "rgba(255,255,255,0.1)",
              color: activeMenu === item ? "white" : "#bbb",
              transition: "0.3s",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* RESPONSIVE GRID */}
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {data.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            hours={item.hours}
            lastWeekHours={item.lastWeek}
            color={item.color}
          />
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#1c1f4a",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              minWidth: "300px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <h2>There is nothing yet</h2>
            <button
              onClick={() => setShowModal(false)}
              style={{
                marginTop: "20px",
                padding: "8px 20px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#5746ea",
                color: "white",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
