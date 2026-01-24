import React from "react";

const testimonials = [
  {
    name: "Diksha S",
    initials: "DS",
    text: "Because of this course I was able to clear my two interviews... Thanks for making such wonderful content.",
    course: "Business Intelligence (BI)",
    link: "#",
  },
  {
    name: "Chethan B",
    initials: "CB",
    text: "This has helped me so much in my career...I joined as a frontend engineer and eventually transitioned to full stack engineer with the help of this course.",
    course: "Go (golang) course",
    link: "#",
  },
  {
    name: "Batchu K",
    initials: "BK",
    text: "Today, I am a software developer, and I credit a significant part of my success to the solid foundation laid by this course.",
    course: "Java course",
    link: "#",
  },
  {
    name: "Ankit K",
    initials: "AK",
    text: "I would highly recommend this Web Development Bootcamp to anyone interested in pursuing a career in web development or looking to enhance skills in this field.",
    course: "Web Development course",
    link: "#",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-12 text-center">
        See what others are achieving through learning
      </h2>

      <div className="flex space-x-6   h-100 overflow-x-auto px-6 py-4 scrollbar-hide snap-x snap-mandatory">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-96 bg-white p-8  rounded-2xl shadow-lg border border-gray-200 snap-center"
          >
            <p className="text-gray-800 mb-6  font-medium leading-relaxed">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="flex items-center mb-4 h-12">
              <div className="h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                {t.initials}
              </div>

              <span className="text-gray-700 font-semibold text-lg flex items-center h-full">
                {t.name}
              </span>
            </div>

            <a
              href={t.link}
              className="text-purple-600 hover:underline font-medium"
            >
              View this {t.course} &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
