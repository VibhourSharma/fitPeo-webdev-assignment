import { Activity, Bell, Home } from "lucide-react";
import ActivityFeed from "./ActivityFeed";
import AnatomySection from "./AnatomySection";

export default function DashboardMainContent() {
  return (
    <main className="dashboard-container">
      {/* first for search */}
      <div className="search-bar">
        <Home
          style={{
            color: "var(--color-text-search-icon)",
            cursor: "pointer",
            height: "18px",
            width: "18px",
          }}
        />
        <input type="text" placeholder="Search..." className="search-input" />
        <Bell
          style={{
            color: "var(--color-text-active)",
            cursor: "pointer",
            height: "18px",
            width: "18px",
          }}
        />
      </div>
      {/* second for cards */}
      <AnatomySection />
      {/* third for charts */}
      <ActivityFeed />
    </main>
  );
}
