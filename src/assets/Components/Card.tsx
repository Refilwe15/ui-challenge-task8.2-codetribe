import React from "react";
import "./Card.css"; 

// Define the props the Card component expects
interface CardProps {
  title: string;          // Card title (e.g. Work, Play)
  hours: number;          // Current hours value
  lastWeekHours: number;  // Hours from last week
  color: string;          // Background color for the top strip
  icon?: string;          // Optional icon image URL
}

// Functional card component using TypeScript and React.FC
const Card: React.FC<CardProps> = ({
  title,
  hours,
  lastWeekHours,
  color,
  icon,
}) => {
  return (
    <div className="card">
      {/* 
        Top colored strip of the card
        The background color is dynamic based on the `color` prop
      */}
      <div className="card-header" style={{ backgroundColor: color }}>
        {/* 
          Render icon only if it exists
          This prevents errors when no icon is passed
        */}
        {icon && (
          <img
            src={icon}
            alt={`${title} icon`}
            className="card-icon"
          />
        )}
      </div>

      {/* Main content area of the card */}
      <div className="card-body">
        {/* Title row with menu icon */}
        <div className="card-title-row">
          <h3>{title}</h3>

         
          <span className="menu">•••</span>
        </div>

        {/* Current hours */}
        <h2>{hours}hrs</h2>

        {/* Last week comparison */}
        <p>Last Week - {lastWeekHours}hrs</p>
      </div>
    </div>
  );
};

export default Card;
