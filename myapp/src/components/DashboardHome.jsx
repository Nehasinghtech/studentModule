// import React from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// // import TeacherDashboard from "./components/TeacherDashboard";
// ChartJS.register(ArcElement, Tooltip, Legend);

// const TeacherDashboard = () => {
//   const teacherEmail = localStorage.getItem("teacherEmail");

//   const [chartData, setChartData] = React.useState({
//     labels: ["Students", "Courses", "Teachers", "Notifications"],
//     datasets: [
//       {
//         data: [120, 8, 15, 25],
//         backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#E91E63"],
//         hoverOffset: 10,
//       },
//     ],
//   });

//   const cardBase = {
//     flex: 1,
//     padding: "25px",
//     borderRadius: "14px",
//     textAlign: "center",
//     color: "white",
//     fontWeight: "600",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//     transition: "transform 0.2s ease, box-shadow 0.2s ease",
//     cursor: "pointer",
//   };

//   const hoverEffect = {
//     transform: "translateY(-6px)",
//     boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
//   };

//   const [hoveredCard, setHoveredCard] = React.useState(null);

//   const cards = [
//     {
//       title: "Total Students",
//       value: 120,
//       gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)",
//     },
//     {
//       title: "Active Courses",
//       value: 8,
//       gradient: "linear-gradient(135deg, #10b981, #34d399)",
//     },
//     {
//       title: "Notifications",
//       value: 25,
//       gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//     },
//     {
//       title: "Total Teachers",
//       value: 15,
//       gradient: "linear-gradient(135deg, #ec4899, #f472b6)",
//     },
//   ];

//   const options = {
//     plugins: {
//       legend: {
//         position: "bottom",
//         labels: { usePointStyle: true, pointStyle: "circle" },
//         onClick: (e, legendItem) => {
//           const index = legendItem.index;
//           const newData = chartData.datasets[0].data.map((val, i) =>
//             i === index ? val : 0
//           );
//           setChartData({
//             ...chartData,
//             datasets: [{ ...chartData.datasets[0], data: newData }],
//           });
//         },
//       },
//     },
//     maintainAspectRatio: false,
//   };

//   const students = [
//     { id: 1, name: "Aarti", course: "Maths", status: "Active" },
//     { id: 2, name: "Neha", course: "Science", status: "Inactive" },
//     { id: 3, name: "Rahul", course: "English", status: "Active" },
//     { id: 4, name: "Simran", course: "Physics", status: "Active" },
//     { id: 5, name: "Aman", course: "Chemistry", status: "Inactive" },
//   ];

//   return (
//     <div>
//       <div
//         style={{
//           width: "100%",
//           padding: "20px",
//           minHeight: "100vh",
//           overflowY: "auto",
//           background: "#f4f6f8",
//         }}
//       >
//         <div
//           style={{
//             padding: "25px",
//             background: "linear-gradient(135deg, #f3f4f6, #e0e7ff)",
//             minHeight: "100vh",
//           }}
//         >
//           <h2
//             style={{
//               fontWeight: "700",
//               marginBottom: "10px",
//               color: "#1e293b",
//             }}
//           >
//             📊 Teacher Dashboard Overview
//           </h2>

//           {/* ✅ Dynamic Email */}
//           <p
//             style={{
//               color: "#475569",
//               marginBottom: "25px",
//               fontSize: "16px",
//             }}
//           >
//             Welcome, <strong>{teacherEmail || "Teacher"}</strong>
//           </p>

//           {/* Cards */}
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//               gap: "20px",
//               marginBottom: "40px",
//             }}
//           >
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 style={{
//                   ...cardBase,
//                   background: card.gradient,
//                   ...(hoveredCard === index ? hoverEffect : {}),
//                 }}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>
//                   {card.title}
//                 </h3>
//                 <p style={{ fontSize: "36px", fontWeight: "700", margin: 0 }}>
//                   {card.value}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Chart + Table */}
//           <div style={{ display: "flex", flexWrap: "wrap", gap: "25px" }}>
//             {/* Pie Chart */}
//             <div
//               style={{
//                 flex: "1",
//                 minWidth: "250px",
//                 background: "white",
//                 padding: "20px",
//                 borderRadius: "14px",
//                 boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <h3
//                 style={{
//                   textAlign: "center",
//                   color: "#1e293b",
//                   marginBottom: "15px",
//                 }}
//               >
//                 Data Distribution
//               </h3>

//               <div style={{ width: "230px", height: "230px" }}>
//                 <Pie data={chartData} options={options} />
//               </div>
//             </div>

//             {/* Table */}
//             <div
//               style={{
//                 flex: "2",
//                 minWidth: "250px",
//                 background: "white",
//                 padding: "20px",
//                 borderRadius: "14px",
//                 boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//               }}
//             >
//               <h3
//                 style={{
//                   color: "#1e293b",
//                   marginBottom: "20px",
//                   fontWeight: "600",
//                 }}
//               >
//                 👩‍🎓 Recent Students
//               </h3>

//               <table
//                 style={{
//                   width: "100%",
//                   borderCollapse: "collapse",
//                   borderRadius: "8px",
//                   overflow: "hidden",
//                 }}
//               >
//                 <thead
//                   style={{
//                     backgroundColor: "#6366f1",
//                     color: "white",
//                     textAlign: "left",
//                   }}
//                 >
//                   <tr>
//                     <th style={{ padding: "10px 12px" }}>ID</th>
//                     <th style={{ padding: "10px 12px" }}>Name</th>
//                     <th style={{ padding: "10px 12px" }}>Course</th>
//                     <th style={{ padding: "10px 12px" }}>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {students.map((s) => (
//                     <tr
//                       key={s.id}
//                       style={{
//                         borderBottom: "1px solid #e2e8f0",
//                         background:
//                           s.status === "Active"
//                             ? "rgba(16,185,129,0.1)"
//                             : "rgba(239,68,68,0.08)",
//                       }}
//                     >
//                       <td style={{ padding: "10px 12px" }}>{s.id}</td>
//                       <td style={{ padding: "10px 12px" }}>{s.name}</td>
//                       <td style={{ padding: "10px 12px" }}>{s.course}</td>
//                       <td
//                         style={{
//                           padding: "10px 12px",
//                           color: s.status === "Active" ? "#059669" : "#dc2626",
//                           fontWeight: "600",
//                         }}
//                       >
//                         {s.status}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default TeacherDashboard;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import Sidebar from "./Sidebar";

ChartJS.register(ArcElement, Tooltip, Legend);

const TeacherDashboard = () => {
  const teacherEmail = localStorage.getItem("teacherEmail") || "Teacher";

  // ✅ STATES
  const [notificationCount, setNotificationCount] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // ✅ PIE CHART STATE
  const [chartData, setChartData] = useState({
    labels: ["Students", "Courses", "Teachers", "Notifications"],
    datasets: [
      {
        data: [120, 8, 15, 0], // 🔹 notification dynamic hoga
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#E91E63"],
        hoverOffset: 10,
      },
    ],
  });

  // ================= FETCH NOTIFICATIONS =================
  useEffect(() => {
    const token = localStorage.getItem("teacherToken");
    if (!token) return;

    axios
      .get("http://localhost:5500/teacher/notifications/count", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const count = res.data.count || 0;
        setNotificationCount(count);

        // 🔹 Pie chart update
        setChartData((prev) => ({
          ...prev,
          datasets: [
            {
              ...prev.datasets[0],
              data: [120, 8, 15, count],
            },
          ],
        }));
      })
      .catch((err) => console.error(err));
  }, []);

  // ================= CARD STYLES =================
  const cardBase = {
    padding: "25px",
    borderRadius: "14px",
    textAlign: "center",
    color: "white",
    fontWeight: "600",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    transition: "0.2s",
    cursor: "pointer",
  };

  const hoverEffect = {
    transform: "translateY(-6px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
  };

  // ================= CARDS =================
  const cards = [
    {
      title: "Total Students",
      value: 120,
      gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)",
    },
    {
      title: "Active Courses",
      value: 8,
      gradient: "linear-gradient(135deg, #10b981, #34d399)",
    },
    {
      title: "Notifications",
      value: notificationCount,
      gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    },
    {
      title: "Total Teachers",
      value: 15,
      gradient: "linear-gradient(135deg, #ec4899, #f472b6)",
    },
  ];

  // ================= PIE OPTIONS =================
  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: { usePointStyle: true },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ display: "flex" }}>
      {/* <Sidebar /> */}

      <div
        style={{
          flex: 1,
          padding: "25px",
          background: "linear-gradient(135deg, #f3f4f6, #e0e7ff)",
          minHeight: "100vh",
        }}
      >
        <h2 style={{ fontWeight: "700", marginBottom: "8px" }}>
          📊 Teacher Dashboard
        </h2>

        <p style={{ marginBottom: "25px", color: "#475569" }}>
          Welcome, <strong>{teacherEmail}</strong>
        </p>

        {/* ================= CARDS ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                ...cardBase,
                background: card.gradient,
                ...(hoveredCard === index ? hoverEffect : {}),
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 style={{ marginBottom: "10px" }}>{card.title}</h3>
              <p style={{ fontSize: "36px", margin: 0 }}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* ================= PIE CHART ================= */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "14px",
            width: "300px",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
            Data Distribution
          </h3>
          <div style={{ height: "250px" }}>
            <Pie data={chartData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
