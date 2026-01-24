import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CaseStudyCard = () => {
  return (
    <div className="flex flex-col h- 70 md:flex-row items-center bg-gray-50 p-8 rounded-lg shadow-md">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-start md:pr-8">
        <p className="text-gray-500 mb-2">Booz | Allen | Hamilton</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Booz Allen Hamilton Unlocks Talent Retention and Productivity Through
          Upskilling
        </h2>

        {/* Stats */}
        <div className="flex mb-6 w-full">
          <div className="mr-8">
            <p className="text-3xl font-bold">93%</p>
            <p className="text-gray-500 text-sm">
              retention rate among participating employees
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold">65%</p>
            <p className="text-gray-500 text-sm">
              of learners noted a positive impact on their productivity
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition flex items-center">
          Read full story <FaArrowRight className="ml-2" />
        </button>

        {/* Pagination */}
        <div className="flex items-center mt-6 space-x-2">
          <FaArrowLeft className="text-gray-400 cursor-pointer hover:text-gray-600" />
          <div className="flex space-x-1">
            <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
          <FaArrowRight className="text-gray-400 cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80"
          // src="https://cms-images.udemycdn.com/96883mtakkm8/BlUue9Lgty7lk3Gc1Ublo/53ac7130fb86e7505b9296c5e0922589/2026GlobalTrendsReportImageLOHPModule__1_.png"
          alt="Case Study"
          className="w-full rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default CaseStudyCard;
