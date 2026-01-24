import React from "react";
import {
  FaStar,
  FaTrophy,
  FaChalkboardTeacher,
  FaRocket,
} from "react-icons/fa";

export default function AICareerSection() {
  return (
    <section className="bg-[#0f1116] text-white py-16 h-200 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between rounded-3xl">
      {/* Left Side */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
          Reimagine your career <br /> in the AI era
        </h1>
        <p className="text-gray-400 mb-6 text-lg">
          Future-proof your skills with Personal Plan. Get access to a variety
          of fresh content from real-world experts.
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <FaStar className="text-purple-400" /> <p>Learn AI and more</p>
          </div>
          <div className="flex items-center gap-3">
            <FaTrophy className="text-green-300" />{" "}
            <p>Prep for a certification</p>
          </div>
          <div className="flex items-center gap-3">
            <FaChalkboardTeacher className="text-yellow-300" />{" "}
            <p>Practice with AI coaching</p>
          </div>
          <div className="flex items-center gap-3">
            <FaRocket className="text-cyan-300" /> <p>Advance your career</p>
          </div>
        </div>

        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
          Learn more
        </button>
        <p className="text-gray-400 mt-3">Starting at ₹500/month</p>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex flex-wrap justify-center gap-6">
        {/* Blue abstract background */}

        {/* Image of person */}
        <img
          src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@2x.webp"
          alt="person"
          className="w-400 h-142 object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}
