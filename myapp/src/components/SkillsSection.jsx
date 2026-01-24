import React from "react";

export default function SkillsSection() {
  const cards = [
    {
      id: 1,
      title: "Generative AI",
      students: "1M+",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdvenQNxdPrIa42DntsSo_uSrJksoYo4ofg&s",
    },
    {
      id: 2,
      title: "IT Certifications",
      students: "14.4M+",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEsp1N7MtkAxrVSaWRH6jwwyqpbOAL2jl-g&s",
    },
    {
      id: 3,
      title: "Data Science",
      students: "8M+",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUg2w9yI2rrSK7rNT2awjBDAsp6epyPSIS1Q&s",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        padding: "50px 10px",
        background: "#f9fafb",
      }}
    >
      {/* Left Text Section */}
      <div style={{ flex: "1" }}>
        <h2 style={{ fontWeight: "700", fontSize: "32px" }}>
          Learn essential career and life skills
        </h2>
        <p style={{ color: "#555", fontSize: "18px", marginTop: "15px" }}>
          Udemy helps you build in-demand skills fast and advance your career in
          a changing job market.
        </p>
      </div>

      {/* Right Side Cards */}
      <div
        style={{
          flex: "2",
          display: "flex",
          gap: "20px",

          justifyContent: "space-between",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              background: "linear-gradient(135deg, #ffffff, #f1f5f9)",
              height: "450px",

              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
              flex: "1",
              cursor: "pointer",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.04)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.12)";
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                padding: "20px",

                // background: "#ffffffc",
                //  // light overlay look
                background: "linear-gradient(135deg, #ffffff, #f1f5f9)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                transition: "transform 0.3s, box-shadow 0.3s",
                borderRadius: "16px",
                // border: "1px  solid black",
                margin: "20px",
              }}
            >
              <p
                style={{
                  color: "#444",
                  fontSize: "15px",
                  margin: "0 0 10px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  //   backgroundColor: "yellow",
                }}
              >
                👥 {card.students}
              </p>
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    margin: "0",
                    fontSize: "20px",
                    color: "#111827",
                  }}
                >
                  {card.title}
                </h5>
                <span
                  style={{
                    fontSize: "22px",
                    color: "#1f2937",
                  }}
                >
                  ➡️
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
