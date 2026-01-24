import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

/*  STAR RATING (YAHIN LIKH DIYA) */
function StarRating({ rating }) {
  const r = Number(rating) || 0;

  return (
    <div className="flex items-center gap-1 text-sm">
      <span className="font-semibold">{r.toFixed(1)}</span>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>{r >= star ? "⭐" : "☆"}</span>
      ))}
    </div>
  );
}

const CourseCard = () => {
  const [courses, setCourses] = useState([]);

  /*  FETCH COURSES (rating backend se aayega) */
  useEffect(() => {
    axios
      .get("http://localhost:5500/viewcourse")
      .then((res) => setCourses(res.data))
      .catch((err) => console.log("Error fetching courses:", err));
  }, []);

  /*  RAZORPAY PAYMENT (UNCHANGED) */
  const handlePayment = async (course) => {
    try {
      const orderRes = await axios.post("http://localhost:5500/createorder", {
        amount: 50000, // ₹500
        course_id: course.course_id,
      });

      const { amount, id: order_id, currency } = orderRes.data;

      const options = {
        key: "rzp_test_Rdy2zFZuKnEuoI",
        amount,
        currency,
        name: "My Learning Platform",
        description: "Course Purchase",
        order_id,

        handler: async function (response) {
          await axios.post("http://localhost:5500/verifypayment", {
            course_id: course.course_id,
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
            signature: response.razorpay_signature,
          });

          Swal.fire(" Success!", "Payment Successful!", "success");
        },

        prefill: {
          name: "Neha User",
          email: "neha@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      new window.Razorpay(options).open();
    } catch (error) {
      Swal.fire("Error", "Payment failed", "error");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Our Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.course_id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* IMAGE */}
            <div className="h-60 overflow-hidden">
              <img
                src={`http://localhost:5500/uploads/${course.image_url}`}
                alt={course.course_name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* DETAILS */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">
                {course.course_name}
              </h3>

              <p className="text-sm text-gray-700 mb-2">
                {course.description?.slice(0, 60)}...
              </p>

              <div className="flex items-center gap-2 mb-2">
                <StarRating rating={course.avg_rating} />
                <span className="text-sm text-gray-600">
                  ({course.rating_count || 0})
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-3">
                Duration: {course.duration}
              </p>

              <button
                onClick={() => handlePayment(course)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;

// import React from "react";

// const CourseCard = ({ course }) => {
//   // 🛑 SAFETY CHECK (MOST IMPORTANT)
//   if (!course) return null;

//   const {
//     course_name = "Untitled Course",
//     image_url,
//     instructor = "Unknown Instructor",
//     avg_rating = 0,
//     rating_count = 0,
//     badge,
//     price = 0,
//     old_price,
//   } = course;

//   return (
//     <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
//       {/* IMAGE */}
//       <div className="h-44 w-full bg-gray-100 overflow-hidden flex items-center justify-center">
//         {image_url ? (
//           <img
//             src={`http://localhost:5500/uploads/${image_url}`}
//             alt={course_name}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <span className="text-gray-400 text-sm">No Image</span>
//         )}
//       </div>

//       {/* CONTENT */}
//       <div className="p-4">
//         <h3 className="font-semibold text-gray-900 line-clamp-2">
//           {course_name}
//         </h3>

//         <p className="text-sm text-gray-500 mt-1">{instructor}</p>

//         {/* RATING */}
//         <div className="flex items-center gap-1 text-sm mt-2">
//           <span className="font-bold text-yellow-600">{avg_rating}</span>
//           <span>⭐</span>
//           <span className="text-gray-500">({rating_count})</span>
//         </div>

//         {/* BADGE */}
//         {badge && (
//           <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
//             {badge}
//           </span>
//         )}

//         {/* PRICE */}
//         <div className="mt-3 flex items-center gap-2">
//           <span className="text-lg font-bold">₹{price}</span>

//           {old_price && (
//             <span className="line-through text-gray-400 text-sm">
//               ₹{old_price}
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
