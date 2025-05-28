import "../styles/module.css";

const mockActivityData = [
  { day: "Mon", height: "60px" },
  { day: "Tue", height: "80px" },
  { day: "Wed", height: "40px" },
  { day: "Thu", height: "100px" },
  { day: "Fri", height: "70px" },
  { day: "Sat", height: "50px" },
  { day: "Sun", height: "30px" },
];

export default function ActivityFeed() {
  return (
    <div className="activity-container">
      <h3 className="heading">Activity</h3>
      <p className="sub-text">3 appointments on this week</p>
      <div className="chart-wrapper">
        {mockActivityData.map((data, index) => (
          <div key={index} className="bar-wrapper">
            <div className="bar" style={{ height: data.height }}></div>
            <span className="day-label">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
