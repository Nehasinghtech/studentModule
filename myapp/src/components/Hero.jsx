import React from "react";

export default function NewStudentOffer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-[450px]">
      <div className="w-full md:w-1/2 h-[200px] ml-[30px] flex items-center p-10 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            New to Udemy? Lucky you.
          </h2>
          <p className="text-gray-600 text-lg">
            Courses start at ₹449. Get your new-student offer before it expires.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full">
        <img
          src="https://img-c.udemycdn.com/notices/banner_carousel_slide/image/e5e9614b-8b2d-48a3-af19-12064716d699.jpg"
          alt="Udemy Offer"
          className="w-full h-full object-cover object-right rounded-lg"
        />
      </div>
    </div>
  );
}
