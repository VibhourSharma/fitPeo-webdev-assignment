import HealthStatusCards from "./HealthStatusCards";
import anatomyMain from "../assets/anatomyMain.png";

export default function AnatomySection() {
  return (
    <section className="anatomy-section">
      <div className="anatomy-header">
        <h1 style={{ paddingLeft: "10px", fontWeight: "bold" }}>Dashboard</h1>
      </div>
      <div className="anatomy-container">
        <div className="anatomy-main">
          <img src={anatomyMain} alt="humanAnatomy-image" />
        </div>
        <HealthStatusCards />
      </div>
    </section>
  );
}
