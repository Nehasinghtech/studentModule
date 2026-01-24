import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <div style={{ width: "20%" }}>
        <Sidebar />
      </div>

      <div
        style={{
          width: "80%",

          background: "#f8f8f8",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
