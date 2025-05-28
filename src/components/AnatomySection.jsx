import HealthStatusCards from "./HealthStatusCards";

export default function AnatomySection() {
  return (
    <section className="anatomy-section">
      <div className="anatomy-header">
        <h1 style={{ paddingLeft: "10px" }}>Dashboard</h1>
      </div>
      <div className="anatomy-container">
        <div className="anatomy-main">
          <img src="/src/assets/anatomy-main.png" alt="AnatomySection" />
        </div>
        <HealthStatusCards />
      </div>
    </section>
  );
}
