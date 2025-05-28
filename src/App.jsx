import { Calendar } from "lucide-react";
import DashboardMainContent from "./components/DashboardMainContent";
import Sidebar from "./components/Sidebar";
import CalendarView from "./components/CalendarView";

export default function App() {
  return (
    <div className="container">
      <Sidebar />
      <DashboardMainContent />
      <CalendarView />
    </div>
  );
}
