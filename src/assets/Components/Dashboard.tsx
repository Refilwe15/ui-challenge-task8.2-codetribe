import React from "react";
import Card from "./Card";
import "./Card.css"

const data = [
  { title: "Work", hours: 32, lastWeek: 36, color: "hsl(15, 100%, 70%)" },
  { title: "Play", hours: 10, lastWeek: 8, color: "hsl(195, 74%, 62%)" },
  { title: "Study", hours: 4, lastWeek: 7, color: "hsl(348, 100%, 68%)" },
  { title: "Exercise", hours: 4, lastWeek: 5, color: "hsl(145, 58%, 55%)" },
  { title: "Social", hours: 5, lastWeek: 10, color: "hsl(264, 64%, 52%)" },
  { title: "Self Care", hours: 2, lastWeek: 2, color: "hsl(43, 84%, 65%)" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
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
  );
};

export default Dashboard;
