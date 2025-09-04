import React from "react";
import "./App.css";
import imageJeremy from "./assets/images/image-jeremy.png";
import workIcon from "./assets/images/icon-work.svg";
import playIcon from "./assets/images/icon-play.svg";
import studyIcon from "./assets/images/icon-study.svg";
import exerciseIcon from "./assets/images/icon-exercise.svg";
import socialIcon from "./assets/images/icon-social.svg";
import selfCareIcon from "./assets/images/icon-self-care.svg";
import ellipsis from "./assets/images/icon-ellipsis.svg";

interface CardProps {
  title: string;
  hours: number;
  lastWeek: number;
  bgColor: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, hours, lastWeek, bgColor, icon }) => {
  return (
    <div className="card-wrapper" style={{ backgroundColor: bgColor }}>
      <img src={icon} alt={`${title} icon`} className="card-icon" />
      <div className="card">
        <div className="card-header">
          <span>{title}</span>
          <img src={ellipsis} alt="options" />
        </div>
        <div className="card-body">
          <h2>{hours}hrs</h2>
          <p>Last Week - {lastWeek}hrs</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <div className="profile-card">
        <div className="profile-top">
          <img src={imageJeremy} alt="Jeremy Robson" className="profile-img" />
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
        <div className="profile-bottom">
          <p>Daily</p>
          <p>Weekly</p>
          <p>Monthly</p>
        </div>
      </div>

      <div className="cards">
        <Card title="Work" hours={32} lastWeek={36} bgColor="hsl(15, 100%, 70%)" icon={workIcon} />
        <Card title="Play" hours={10} lastWeek={8} bgColor="hsl(195, 74%, 62%)" icon={playIcon} />
        <Card title="Study" hours={4} lastWeek={7} bgColor="hsl(348, 100%, 68%)" icon={studyIcon} />
        <Card title="Exercise" hours={4} lastWeek={5} bgColor="hsl(145, 58%, 55%)" icon={exerciseIcon} />
        <Card title="Social" hours={5} lastWeek={10} bgColor="hsl(264, 64%, 52%)" icon={socialIcon} />
        <Card title="Self Care" hours={2} lastWeek={2} bgColor="hsl(43, 84%, 65%)" icon={selfCareIcon} />
      </div>
    </div>
  );
}

export default App;
// Remove incorrect import at the end of the file