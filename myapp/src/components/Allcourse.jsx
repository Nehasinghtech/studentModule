import React from "react";

const ShowAllCourses = ({
  text = "Show all Artificial Intelligence (AI) courses",
  link = "/ai-courses",
}) => {
  return (
    <div style={{ textAlign: "left", marginTop: "20px" }}>
      <a
        href={link}
        style={{
          color: "#7c3aed", // purple color
          fontWeight: "600",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "translateX(5px)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "translateX(0)";
        }}
      >
        {text}{" "}
        <span style={{ fontSize: "16px", transition: "transform 0.3s ease" }}>
          →
        </span>
      </a>
    </div>
  );
};

export default ShowAllCourses;
