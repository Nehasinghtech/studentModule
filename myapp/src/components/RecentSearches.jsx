import React from "react";

const RecentSearches = () => {
  // static data (later you can make this dynamic using props or API)
  const courses = [
    {
      id: 1,
      // image: "https://i.ytimg.com/vi/mj8C6qXlcso/maxresdefault.jpg", // example image/
      title: "The Complete Python Bootcamp From Zero to Hero in Python",
      author: "Jose Portilla, Pierian Training",
      badge: "Premium",
      rating: 4.6,
      reviews: "549,157",
      price: "₹519",
      oldPrice: "₹3,199",
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      title: "Complete Python with AI Skills to Get Your Dream IT Job",
      author: "Imran Afzal",
      badge: "Bestseller",
      rating: 4.6,
      reviews: "317",
      price: "₹549",
      oldPrice: "₹1,869",
    },
    {
      id: 3,
      image:
        "https://miro.medium.com/v2/resize:fit:1100/1*Rz4n3c1-nbQWv0ZOn8U3PQ.png",
      title: "Automate the Boring Stuff with Python Programming",
      author: "Al Sweigart",
      badge: "Premium",
      rating: 4.6,
      reviews: "117,827",
      price: "₹559",
      oldPrice: "₹3,369",
    },
    {
      id: 4,
      image: "https://www.udemy.com/course/complete-python-bootcamp/",
      title: "The Ultimate Python Bootcamp: Learn by Building 50 Projects",
      author: "Hitesh Choudhary",
      badge: "Premium",
      rating: 4.7,
      reviews: "1,194",
      price: "₹529",
      oldPrice: "₹2,079",
    },
  ];

  return (
    <div className="bg-white py-10 px-10">
      <h2 className="text-2xl font-semibold mb-6">
        Based on your recent searches
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{course.author}</p>

              <div className="flex items-center gap-2 mt-2">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    course.badge === "Bestseller"
                      ? "bg-green-100 text-green-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {course.badge}
                </span>
                <span className="text-yellow-500 text-sm">
                  ⭐ {course.rating}
                </span>
                <span className="text-gray-500 text-xs">
                  {course.reviews} ratings
                </span>
              </div>

              <div className="mt-3">
                <span className="font-bold text-lg">{course.price}</span>{" "}
                <span className="text-gray-400 line-through text-sm">
                  {course.oldPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
