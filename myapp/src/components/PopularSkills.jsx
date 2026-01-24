import React from "react";

const PopularSkills = () => {
  return (
    <div className="bg-gray-50 py-12 px-10">
      <h2 className="text-2xl font-semibold mb-4">Popular Skills</h2>

      <div className="grid grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            ChatGPT is a top skill
          </h3>
          <a href="#" className="text-purple-600 font-medium hover:underline">
            See ChatGPT courses
          </a>
          <p className="text-gray-600 text-sm mt-1">5,125,253 learners</p>

          <button className="mt-6 border border-purple-500 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-50 transition">
            Show all trending skills
          </button>
        </div>

        {/* Development */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            Development
          </h4>
          <ul className="space-y-2 text-sm text-purple-600">
            <li>
              <a href="#" className="hover:underline">
                Python
              </a>
              <p className="text-gray-600 text-xs">49,462,391 learners</p>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Web Development
              </a>
              <p className="text-gray-600 text-xs">14,325,399 learners</p>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Data Science
              </a>
              <p className="text-gray-600 text-xs">8,156,068 learners</p>
            </li>
          </ul>
        </div>

        {/* Design */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Design</h4>
          <ul className="space-y-2 text-sm text-purple-600">
            <li>
              <a href="#" className="hover:underline">
                Blender
              </a>
              <p className="text-gray-600 text-xs">3,053,118 learners</p>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Graphic Design
              </a>
              <p className="text-gray-600 text-xs">4,631,754 learners</p>
            </li>
            <li>
              <a href="#" className="hover:underline">
                User Experience (UX) Design
              </a>
              <p className="text-gray-600 text-xs">2,124,091 learners</p>
            </li>
          </ul>
        </div>

        {/* Business */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Business</h4>
          <ul className="space-y-2 text-sm text-purple-600">
            <li>
              <a href="#" className="hover:underline">
                PMI Project Management Professional (PMP)
              </a>
              <p className="text-gray-600 text-xs">2,761,934 learners</p>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Microsoft Power BI
              </a>
              <p className="text-gray-600 text-xs">4,991,378 learners</p>
            </li>
            <li>
              <a href="#" className="hover:underline">
                PMI Certified Associate in Project Management (CAPM)
              </a>
              <p className="text-gray-600 text-xs">463,660 learners</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularSkills;
