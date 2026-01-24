import React from "react";
import CourseList from "../components/CourseList";

const CoursesPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>

      <CourseList />
    </div>
  );
};

export default CoursesPage;
