import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <div>
      <h2 className="sidebar-title">
        Health
        <span style={{ color: "var(--color-text-active)" }}>care.</span>
      </h2>

      <div className="responsive-header">
        <h2 style={{ color: "var(--color-activity-bar-filled)" }}>
          Health
          <span style={{ color: "var(--color-text-active)" }}>care.</span>
        </h2>
      </div>

      <Sidebar />
    </div>
  );
}
