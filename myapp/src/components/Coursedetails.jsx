// =======================================

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useCart } from "../components/CartContext";
// import { useNavigate } from "react-router-dom";

function CourseDetails() {
  const { course_id } = useParams();
  const [course, setCourse] = useState(null);
  const { fetchCartCount } = useCart();
  // const navigate = useNavigate();

  // ================= FETCH COURSE =================
  useEffect(() => {
    axios
      .get(`http://localhost:5500/course/${course_id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.log(err));
  }, [course_id]);

  if (!course) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  // ================= ADD TO CART =================
  const addToCart = async () => {
    try {
      await axios.post("http://localhost:5500/cart/add", {
        course_id: course.course_id,
      });

      fetchCartCount();

      Swal.fire("Added!", "Course added to cart", "success");
    } catch (err) {
      if (err.response?.status === 409) {
        Swal.fire("Info", "Course already in cart", "info");
      } else {
        Swal.fire("Error", "Something went wrong", "error");
      }
    }
  };
  // const handleAddToCart = () => {
  //   const token = localStorage.getItem("token");
  //   const role = localStorage.getItem("role");

  //   if (!token || role !== "student") {
  //     Swal.fire("Login Required", "Please login as student", "warning");
  //     navigate("/login");
  //     return;
  //   }

  //   addToCart();
  // };

  // ================= UI =================
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={
              course.image_url
                ? `http://localhost:5500/uploads/${course.image_url}`
                : "https://via.placeholder.com/600x400"
            }
            alt={course.course_name}
            className="w-full h-[320px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{course.course_name}</h1>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {course.description}
          </p>

          <p className="text-sm text-gray-600 mb-6">
            ⏱ Duration: <b>{course.duration}</b>
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button
              onClick={addToCart}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg"
            >
              Add to Cart
            </button>

            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg text-lg hover:bg-purple-50">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
