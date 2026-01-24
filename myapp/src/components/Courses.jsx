import React, { useRef, useState } from "react";
import "../index.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Courses() {
  const scrollRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(4); // Initially 4 cards

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const courses = [
    {
      id: 1,
      title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
      instructor: "365 Careers",
      tag: "Bestseller",
      rating: 4.6,
      students: "9,707 ratings",
      price: "₹529",
      oldPrice: "₹3,089",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxTrfPhNR-PHRJ7fbmAniOakLSiddBvI7fg&s",
    },
    {
      id: 2,
      title: "AI for Strategic HR Operations and Compliance [EN]",
      instructor: "PapaHR",
      rating: 4.4,
      students: "91 ratings",
      price: "₹529",
      oldPrice: "₹1,739",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgS8evNKjMTR8Tj9m6FKnVNu28NC8n26G3g&s",
    },
    {
      id: 3,
      title: "Artificial Intelligence for Business + ChatGPT Prize [2025]",
      instructor: "Hadelin de Ponteves",
      tag: "Premium",
      rating: 4.5,
      students: "4,798 ratings",
      price: "₹659",
      oldPrice: "₹3,599",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LFWQOYoGkJlteAIPG3sWHOjn55cuwurdwQ&s",
    },
    {
      id: 4,
      title: "Data Science & AI Masters 2025 - From Python To Gen AI",
      instructor: "Dr. Satyajit Pattnaik",
      tag: "Bestseller",
      rating: 4.4,
      students: "1,385 ratings",
      price: "₹529",
      oldPrice: "₹3,109",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZO75oXnN3ZSae0HYihzjIlTq07aDZnvjkyw&s",
    },
    {
      id: 5,
      title: "Machine Learning A-Z: AI, Python & R in Data Science",
      instructor: "Kirill Eremenko",
      tag: "Bestseller",
      rating: 4.7,
      students: "1M+ ratings",
      price: "₹699",
      oldPrice: "₹3,599",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLmoN8lW4EeZ8eohBA0CDD8stB62ewvvXzHQ&s",
    },
    {
      id: 6,
      title: "Complete ChatGPT Developer Course - Build AI Apps",
      instructor: "Zero to Mastery",
      rating: 4.6,
      students: "40K ratings",
      price: "₹579",
      oldPrice: "₹2,999",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLDuRMp6Mbmdlb7Ji7ouSkc-7iAucYw3V9Q&s",
    },
    {
      id: 7,
      title: "TensorFlow Developer Bootcamp with Python",
      instructor: "DeepLearning.ai",
      tag: "Premium",
      rating: 4.5,
      students: "32K ratings",
      price: "₹529",
      oldPrice: "₹2,999",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjroh3HLo1DIuUVAeGBF6_VJsaZFMYW9mPsg&s",
    },
    {
      id: 8,
      title: "Master Generative AI with Gemini, ChatGPT & Claude",
      instructor: "Tech with Tim",
      rating: 4.8,
      students: "15K ratings",
      price: "₹759",
      oldPrice: "₹3,899",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LFWQOYoGkJlteAIPG3sWHOjn55cuwurdwQ&s",
    },
  ];

  const showMore = () => {
    setVisibleCount(visibleCount + 4); // Next 4 cards
  };

  return (
    <div className="relative bg-gray-50 py-12 px-4 md:px-12 rounded-3xl overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Top AI & Data Science Courses
      </h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
      >
        <FaChevronLeft className="text-gray-700 text-lg" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
      >
        <FaChevronRight className="text-gray-700 text-lg" />
      </button>

      {/* Course Cards */}
      <div
        ref={scrollRef}
        className="flex gap-15 overflow-x-auto scroll-smooth no-scrollbar  pb-4 px-4"
      >
        {courses.slice(0, visibleCount).map((course) => (
          <div
            key={course.id}
            className="bg-white w-100 min-w-[20rem] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-4 flex-shrink-0"
          >
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-[200px] object-cover rounded-xl mb-4"
            />

            <div>
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>

              <div className="flex items-center flex-wrap gap-2 mt-3">
                {course.tag && (
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-md ${
                      course.tag === "Bestseller"
                        ? "bg-green-100 text-green-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {course.tag}
                  </span>
                )}
                <div className="flex items-center text-sm text-gray-700">
                  <FaStar className="text-yellow-500 mr-1" /> {course.rating}
                </div>
                <span className="text-sm text-gray-500">{course.students}</span>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <p className="font-bold text-lg">{course.price}</p>
                <p className="text-gray-400 line-through">{course.oldPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < courses.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={showMore}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Show More Courses
          </button>
        </div>
      )}
    </div>
  );
}
