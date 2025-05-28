import lungs from "../assets/lungs.svg";
import tooth from "../assets/tooth.svg";
import bone from "../assets/bone.svg";
import "../styles/module.css";

export default function HealthStatusCards() {
  const floatingCardContent = [
    {
      title: "Lungs",
      date: "12 oct 2021",
      icon: lungs,
      progress: 80,
    },
    {
      title: "Teeth",
      date: "12 oct 2021",
      icon: tooth,
      progress: 60,
    },
    {
      title: "Bone",
      date: "12 oct 2021",
      icon: bone,
      progress: 50,
    },
  ];

  function getProgressBarClassName(progress) {
    if (progress >= 80) {
      return "progress-red";
    } else if (progress >= 60) {
      return "progress-orange";
    } else {
      return "progress-teal";
    }
  }

  return (
    <div className="floating-card-container">
      {floatingCardContent.map((card) => (
        <div className="floating-card" key={card.title}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={card.icon}
              alt={`${card.title}-icon`}
              style={{
                width: "25px",
                height: "25px",
              }}
            />
            <div
              style={{
                fontSize: "16px",
                color: "var(--color-text-body)",
                fontWeight: "bold",
              }}
            >
              {card.title}
            </div>
          </div>
          <div style={{ fontSize: "14px", color: "var(--color-text-body)" }}>
            Date: {card.date}
          </div>
          <progress
            className={getProgressBarClassName(card.progress)}
            value={card.progress}
            max="100"
          ></progress>
        </div>
      ))}
    </div>
  );
}
