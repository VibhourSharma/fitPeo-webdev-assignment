import { upcomingAppointments } from "../data/appointment";

export default function UpcomingAppointment() {
  return (
    <div>
      <div>
        <h2 style={{ padding: "10px" }}>Upcoming Appointments</h2>
      </div>
      {upcomingAppointments.map((appointment, index) => (
        <>
          <h4 style={{ padding: "10px" }}>{appointment.day}</h4>
          <div key={index} className="upcoming-appointment">
            {appointment.events.map((event, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "10px",
                }}
                className="upcoming-appointment-card"
              >
                <div>
                  <p style={{ fontWeight: "bold", paddingBottom: "10px" }}>
                    {event.title}
                  </p>
                  <p>{event.time}</p>
                </div>
                <img
                  src={event.icon}
                  alt={`${event.title}-icon`}
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
