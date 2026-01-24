import React from "react";
import { Link } from "react-router-dom";

export default function CourseCategories() {
  const courses = [
    { name: "Artificial Intelligence (AI)", path: "/courses/ai" },
    { name: "Python", path: "/courses/python" },
    { name: "Microsoft Excel", path: "/courses/excel" },
    { name: "AI Agents & Agentic AI", path: "/courses/ai-agents" },
    { name: "Digital Marketing", path: "/courses/marketing" },
    { name: "Amazon AWS", path: "/courses/aws" },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6  rounded-3xl shadow-md">
      {/* Heading Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Skills to transform your career and life
      </h2>
      <p className="text-gray-500 mb-8 text-lg">
        From critical skills to technical topics, Udemy supports your
        professional development.
      </p>

      {/* Course Links Section */}
      <div className="flex flex-wrap  gap-8 text-lg font-semibold text-gray-700">
        {courses.map((course, index) => (
          <Link
            key={index}
            to={course.path}
            className="relative group hover:text-purple-700 transition font-bold"
          >
            {course.name}
            {/* Underline hover effect */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
