import { navLinks, navTools } from "../data/navLinks";
import {
  Home,
  Clock,
  Calendar,
  Clipboard,
  ChartPie,
  MessageCircle as Chat,
  HelpCircle,
} from "lucide-react";
import Header from "./Header";

export default function Sidebar() {
  return (
    <main className="sidebar-container">
      <Header />
      <div className="sidebar-content-main">
        <div className="sidebar-general">
          <h3 className="sidebar-subtitle">General</h3>
          <ul>
            {navLinks.map((link) => {
              const icon = {
                Dashboard: <Home height={"18px"} width={"18px"} />,
                History: <Clock height={"18px"} width={"18px"} />,
                Calendar: <Calendar height={"18px"} width={"18px"} />,
                Appointments: <Clipboard height={"18px"} width={"18px"} />,
                Statistics: <ChartPie height={"18px"} width={"18px"} />,
              }[link.label];
              return (
                <li key={link.label}>
                  {icon}
                  <span style={{ marginLeft: "7px" }}>{link.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sidebar-tools">
          <h3 className="sidebar-subtitle">Tools</h3>
          <ul>
            {navTools.map((link) => {
              const icon = {
                Chat: <Chat height={"18px"} width={"18px"} />,
                Support: <HelpCircle height={"18px"} width={"18px"} />,
              }[link.label];
              return (
                <li key={link.label}>
                  {icon}
                  <span style={{ marginLeft: "7px" }}>{link.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
