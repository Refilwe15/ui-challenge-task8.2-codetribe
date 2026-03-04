import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Card.css";

interface CardProps {
  title: string;
  hours: number;
  lastWeekHours: number;
  color: string;
  icon?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  hours,
  lastWeekHours,
  color,
  icon,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card">
        {/* Top colored strip */}
        <div className="card-header" style={{ backgroundColor: color }}>
          {icon && (
            <img src={icon} alt={`${title} icon`} className="card-icon" />
          )}
        </div>

        {/* Card body */}
        <div className="card-body">
          <div className="card-title-row">
            <h3>{title}</h3>

            {/* CLICKABLE DOTS */}
            <span
              className="menu"
              onClick={() => setShowModal(true)}
              style={{ cursor: "pointer" }}
            >
              •••
            </span>
          </div>

          <h2>{hours}hrs</h2>
          <p>Last Week - {lastWeekHours}hrs</p>
        </div>
      </div>

      {/* MODAL USING PORTAL */}
      {showModal &&
        ReactDOM.createPortal(
          <div
            onClick={() => setShowModal(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999999,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "#1c1f4a",
                padding: "40px",
                borderRadius: "20px",
                color: "white",
                minWidth: "300px",
                textAlign: "center",
                boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
              }}
            >
              <h2>Nothing here yet</h2>

              <button
                onClick={() => setShowModal(false)}
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
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
          </div>,
          document.body,
        )}
    </>
  );
};

export default Card;
