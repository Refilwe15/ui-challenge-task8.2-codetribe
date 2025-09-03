import React from "react";
import "./Card.css"; // import the CSS file

interface CardProps {
  title: string;
  hours: number;
  lastWeekHours: number;
  color: string; // header background color
  icon?: string; // optional icon
}

const Card: React.FC<CardProps> = ({ title, hours, lastWeekHours, color, icon }) => {
  return (
    <div className="card">
      {/* Top colored strip */}
      <div className="card-header" style={{ backgroundColor: color }}>
        {icon && <img src={icon} alt={`${title} icon`} className="card-icon" />}
      </div>

      {/* Card body */}
      <div className="card-body">
        <div className="card-title-row">
          <h3>{title}</h3>
          <span className="menu">•••</span>
        </div>
        <h2>{hours}hrs</h2>
        <p>Last Week - {lastWeekHours}hrs</p>
      </div>
    </div>
  );
};

export default Card;
