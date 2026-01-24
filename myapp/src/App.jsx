// // =====================================================
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Heading from "./components/Heading";
import Courses from "./components/Courses";
import SkillsSection from "./components/SkillsSection";
import AICareerSection from "./components/AICareerSection";
import CourseCategories from "./components/CourseCategories";
import ShowAllCourses from "./components/Allcourse";
import Companies from "./components/Companies";
import Testimonials from "./components/Testimonials";
import Certification from "./components/Certification";
import Footer from "./components/Footer";
import CareerSection from "./components/CareerSection";
import CourseCards from "./components/CourseCards";
import CaseStudyCard from "./components/CaseStudyCard";
import PopularSkills from "./components/PopularSkills";
import RecentSearches from "./components/RecentSearches";

import DashboardLayout from "./components/DashboardLayout";
import DashboardHome from "./components/DashboardHome";
import Course from "./components/Course";
import CourseDetail from "./components/Coursedetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Syllabus from "./components/Syllabus";
import TeacherProtectedRoute from "./components/TeacherProtectedRoute";
import TeacherDashboard from "./components/DashboardHome";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SkillsSection />
              <Heading />
              <AICareerSection />
              <CourseCategories />
              <Courses />
              <Course />
              <ShowAllCourses />
              <Companies />
              <Testimonials />
              <Certification />
              <CareerSection />
              <CourseCards />
              <CaseStudyCard />
              <RecentSearches />
              <PopularSkills />
              <Footer />
            </>
          }
        />

        {/* COURSE DETAIL */}
        <Route path="/course/:course_id" element={<CourseDetail />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* DASHBOARD */}
        <Route path="/teacherdashboard" element={<DashboardLayout />}>
          {/* <Route path="/teacherdashboard" element={<TeacherProtectedRoute />}>
          <Route index element={<TeacherDashboard />} />
        </Route> */}
          <Route index element={<DashboardHome />} />
          <Route path="courses" element={<Course />} />
          <Route path="syllabus" element={<Syllabus />} />
        </Route>
      </Routes>
    </>
  );
}

// // =================================================
