// // ===================================================================================================
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // PRICE STATES
  const [originalPrice, setOriginalPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  // ADD COURSE STATES
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    course_id: "",
    course_name: "",
    description: "",
  });
  const [courseImage, setCourseImage] = useState(null);

  const [selected, setSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const { fetchCartCount } = useCart();

  // FETCH COURSES
  useEffect(() => {
    const token = localStorage.getItem("teacherToken");

    axios
      .get("http://localhost:5500/teacher/courses", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setCourses(res.data || []))
      .catch(() => Swal.fire("Error", "Courses fetch failed", "error"))
      .finally(() => setLoading(false));
  }, []);

  // ADD TO CART
  const addToCart = async (course) => {
    const token = localStorage.getItem("teacherToken");

    try {
      await axios.post(
        "http://localhost:5500/cart/add",
        { course_id: course.course_id },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      fetchCartCount();
      Swal.fire("Added!", "Course added to cart", "success");
    } catch {
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  // MODAL
  const openModal = (course) => {
    setSelected(course);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelected(null);
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  // FORM HANDLERS
  const handleCourseChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setCourseImage(e.target.files[0]);
  };

  // ADD COURSE + PRICE
  const handleAddCourse = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("teacherToken");

    try {
      const formData = new FormData();
      formData.append("course_id", newCourse.course_id);
      formData.append("course_name", newCourse.course_name);
      formData.append("description", newCourse.description);
      if (courseImage) formData.append("image_url", courseImage);

      await axios.post("http://localhost:5500/addcourse", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // SAVE PRICE
      await axios.post("http://localhost:5500/course/price", {
        course_id: newCourse.course_id,
        original_price: originalPrice,
        selling_price: sellingPrice,
      });

      Swal.fire("Success", "Course + Price added", "success");
      setShowAddModal(false);
      window.location.reload();
    } catch {
      Swal.fire("Error", "Course add failed", "error");
    }
  };

  if (loading) {
    return <div className="text-center p-10">Loading courses...</div>;
  }

  return (
    <div className="container mx-auto p-6 max-h-screen overflow-y-auto">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Courses</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Course
        </button>
      </div>

      {/* COURSE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.course_id}
            className="bg-white shadow rounded-xl overflow-hidden"
          >
            <div onClick={() => openModal(course)} className="cursor-pointer">
              <img
                src={`http://localhost:5500/uploads/${course.image_url}`}
                alt={course.course_name}
                className="h-52 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{course.course_name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {course.description}
                </p>

                {course.selling_price && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-green-600 font-bold">
                      ₹{course.selling_price}
                    </span>
                    <span className="line-through text-gray-400">
                      ₹{course.original_price}
                    </span>
                    <span className="text-red-600 text-xs font-semibold">
                      (
                      {Math.round(
                        ((course.original_price - course.selling_price) /
                          course.original_price) *
                          100,
                      )}
                      % OFF)
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DETAIL MODAL */}
      {isModalOpen && selected && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl w-[90%] max-w-4xl flex"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`http://localhost:5500/uploads/${selected.image_url}`}
              className="w-1/2 object-cover"
              alt=""
            />
            <div className="w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold">{selected.course_name}</h2>
                <p className="mt-3 text-gray-600">{selected.description}</p>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => addToCart(selected)}
                  className="bg-purple-600 text-white px-5 py-2 rounded"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => navigate("/checkout")}
                  className="bg-green-600 text-white px-5 py-2 rounded"
                >
                  Checkout
                </button>
                <button
                  onClick={closeModal}
                  className="border px-5 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Add New Course</h2>

            <form onSubmit={handleAddCourse} className="space-y-3">
              <input
                name="course_id"
                placeholder="Course ID"
                onChange={handleCourseChange}
                className="w-full border p-2 rounded"
              />

              <input
                name="course_name"
                placeholder="Course Name"
                onChange={handleCourseChange}
                className="w-full border p-2 rounded"
              />

              <textarea
                name="description"
                placeholder="Description"
                onChange={handleCourseChange}
                className="w-full border p-2 rounded"
              />

              <input type="file" onChange={handleImageChange} />

              <input
                placeholder="Original Price"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                className="w-full border p-2 rounded"
              />

              <input
                placeholder="Selling Price"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
                className="w-full border p-2 rounded"
              />

              <button className="bg-purple-600 text-white px-4 py-2 rounded w-full">
                Add Course
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;

// ===================================================================================================
