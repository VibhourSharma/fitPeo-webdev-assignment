import DashboardMainContent from "./components/DashboardMainContent";
import CalendarView from "./components/CalendarView";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="container">
      <Header />
      <DashboardMainContent />
      <CalendarView />
    </div>
  );
}
