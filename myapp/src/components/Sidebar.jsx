// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaTachometerAlt, FaChalkboardTeacher } from "react-icons/fa";

// const Sidebar = () => {
//   const location = useLocation();

//   return (
//     <div
//       style={{
//         width: "280px",
//         height: "100vh",
//         background: "#1f2937",
//         color: "#fff",
//         padding: "40px 20px 20px 20px",
//       }}
//     >
//       <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//         <li style={{ marginBottom: "12px" }}>
//           <Link
//             to="/dashboard"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               color: "#fff",
//               textDecoration: "none",
//               cursor: "pointer",
//               padding: "10px",
//               fontSize: "16px",
//             }}
//           >
//             <FaTachometerAlt style={{ minWidth: "20px", fontSize: "18px" }} />
//             <span style={{ lineHeight: "20px" }}>Dashboard</span>
//           </Link>
//         </li>

//         {/* <li style={{ marginBottom: "12px" }}>
//           <Link
//             to="/teacher"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               color: "#fff",
//               textDecoration: "none",
//               cursor: "pointer",
//               padding: "10px",
//               fontSize: "16px",
//             }}
//           >
//             <FaChalkboardTeacher
//               style={{ minWidth: "20px", fontSize: "18px" }}
//             />
//             <span style={{ lineHeight: "20px" }}>Teacher</span>
//           </Link>
//         </li> */}

//         <li style={{ marginBottom: "12px" }}>
//           <Link
//             to="/course"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               color: "#fff",
//               textDecoration: "none",
//               cursor: "pointer",
//               padding: "10px",
//               fontSize: "16px",
//             }}
//           >
//             <FaChalkboardTeacher
//               style={{ minWidth: "20px", fontSize: "18px" }}
//             />
//             <span style={{ lineHeight: "20px" }}>Courses</span>
//           </Link>
//         </li>

//         <li style={{ marginBottom: "12px" }}>
//           <Link
//             to="/syllabus"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               color: "#fff",
//               textDecoration: "none",
//               cursor: "pointer",
//               padding: "10px",
//               fontSize: "16px",
//             }}
//           >
//             <FaChalkboardTeacher
//               style={{ minWidth: "20px", fontSize: "18px" }}
//             />
//             <span style={{ lineHeight: "20px" }}>Syllabus</span>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
// // ✅ Sidebar.js

import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaChalkboardTeacher } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "280px",
        height: "100vh",
        background: "#1f2937",
        color: "#fff",
        padding: "40px 20px 20px 20px",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ marginBottom: "12px" }}>
          <Link
            to="/teacherdashboard"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
              fontSize: "16px",
            }}
          >
            <FaTachometerAlt style={{ minWidth: "20px", fontSize: "18px" }} />
            <span>Dashboard</span>
          </Link>
        </li>

        <li style={{ marginBottom: "12px" }}>
          <Link
            to="/teacherdashboard/courses"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
              fontSize: "16px",
            }}
          >
            <FaChalkboardTeacher
              style={{ minWidth: "20px", fontSize: "18px" }}
            />
            <span>Courses</span>
          </Link>
        </li>

        <li style={{ marginBottom: "12px" }}>
          <Link
            to="/teacherdashboard/syllabus"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
              fontSize: "16px",
            }}
          >
            <FaChalkboardTeacher
              style={{ minWidth: "20px", fontSize: "18px" }}
            />
            <span>Syllabus</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
