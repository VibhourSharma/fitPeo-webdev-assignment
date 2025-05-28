import { calendarAppointments } from "../data/appointment";
import "../styles/module.css";
import UpcomingAppointment from "./UpcomingAppointment";

const calendarData = [
  {
    date: "Mon 1",
    appointments: ["11:00", "16:00", "19:00"],
    highlight: [],
  },
  { date: "Tue 2", appointments: ["11:00", "16:00", "19:00"], highlight: [] },
  {
    date: "Wed 3",
    appointments: ["11:00", "16:00", "19:00"],
    highlight: ["16:00"],
  },
  { date: "Thu 4", appointments: ["11:00", "16:00", "19:00"], highlight: [] },
  {
    date: "Fri 5",
    appointments: ["11:00", "16:00", "19:00"],
    highlight: ["19:00"],
  },
  { date: "Sat 6", appointments: ["11:00", "16:00", "19:00"], highlight: [] },
];

const CalendarView = () => {
  return (
    <main className="calendar-container">
      {/* calendar */}
      <div className="calendar-main">
        <h3 style={{ padding: "10px", marginLeft: "20px" }}>October 2021</h3>
        <div className="calendar-wrapper">
          {calendarData.map((day, index) => (
            <div
              className={`day-column ${
                day.highlight.length > 0 ? "highlighted-day" : ""
              }`}
              key={index}
            >
              <div className="date">{day.date}</div>
              <div className="appointments">
                {day.appointments.map((time, i) => (
                  <div
                    key={i}
                    className={`time-slot ${
                      day.highlight.includes(time) ? "highlighted-time" : ""
                    }`}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* appointment details card */}
      <div className="appointment-card-container">
        {calendarAppointments.map((appointment, index) => (
          <div
            key={index}
            className="appointment-card"
            style={{
              backgroundColor: appointment.isActive && "#3c82f6",
              color: appointment.isActive && "white",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "15px",
                marginBottom: "15px",
                fontWeight: "bold",
              }}
            >
              <span>{appointment.type}</span>
              <img
                src={appointment.icon}
                alt={`${appointment.type}-icon`}
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <span style={{ fontSize: "14px" }}>{appointment.time}</span>
            <span style={{ fontSize: "14px" }}>{appointment.doctor}</span>
          </div>
        ))}
      </div>
      <div>
        <UpcomingAppointment />
      </div>
    </main>
  );
};

export default CalendarView;
