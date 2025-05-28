import injection from "../assets/injection.svg";
import eye from "../assets/eye.svg";
import doctor from "../assets/doctor.svg";
import heart from "../assets/heart.svg";
import tooth from "../assets/tooth.svg";
import muscle from "../assets/muscle.svg";

export const calendarAppointments = [
  {
    type: "Dentist",
    time: "16:00 - 17:00",
    doctor: "Dr. Cameron Williamson",
    icon: tooth,
    isActive: true,
  },
  {
    type: "Physiotherapist Appointment",
    time: "19:00 - 20:00",
    doctor: "Dr. George Martin",
    icon: muscle,
    isActive: false,
  },
];

export const upcomingAppointments = [
  {
    day: "Saturday",
    events: [
      {
        title: "Health Checkup complete",
        time: "09:00",
        icon: injection,
      },
      {
        title: "Ophthalmologistlogist",
        time: "14:00",
        icon: eye,
      },
    ],
  },
  {
    day: "Sunday",
    events: [
      {
        title: "Cardiologist",
        time: "10:00",
        icon: heart,
      },
      {
        title: "Neurologist",
        time: "15:00",
        icon: doctor,
      },
    ],
  },
];
