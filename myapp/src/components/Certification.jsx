import React from "react";

const certifications = [
  {
    title: "CompTIA",
    description: "Cloud, Networking, Cybersecurity",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSs-57Sh55yhEONA1mq9owdIzcU5tr943IUg&s",
  },
  {
    title: "AWS",
    description: "Cloud, AI, Coding, Networking",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbiHwqwzOwXFKdn8vLSs1LGzzljpZbNLgpw&s",
  },
  {
    title: "PMI",
    description: "Project & Program Management",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLD9Bd0i1XY11p876SH1dqtxziwK9_m-VWQ&s",
  },
];

export default function Certification() {
  return (
    <div className="bg-gray-900 text-white py-12 m-20 px-6 rounded-[30px] h-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left text */}
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold mb-4">
            Get certified and get ahead in your career
          </h2>
          <p className="mb-4">
            Prep for certifications with comprehensive courses, practice tests,
            and special offers on exam vouchers.
          </p>
          <button className="font-bold underline flex items-center gap-1">
            Explore certifications and vouchers &rarr;
          </button>
        </div>

        {/* Cards */}
        <div className="md:w-2/3 flex gap-6 flex-wrap mt-10">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-gray-800 p-4 rounded-lg shadow-md w-60 flex-shrink-0"
            >
              <div className="h-32 w-full mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
              <p className="text-gray-300 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
