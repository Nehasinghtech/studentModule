import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// import { useCart } from "../context/CartContext";
import { useCart } from "../components/CartContext";

function Cart() {
  const navigate = useNavigate();
  const { fetchCartCount } = useCart();

  const [cartItems, setCartItems] = useState([]);

  // ================= FETCH CART =================
  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:5500/cart");
      setCartItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCart();
    fetchCartCount();
  }, []);

  // ================= REMOVE FROM CART =================
  const removeFromCart = async (course_id) => {
    try {
      await axios.delete(`http://localhost:5500/cart/remove/${course_id}`);

      Swal.fire("Removed", "Course removed from cart", "success");

      fetchCart();
      fetchCartCount();
    } catch (err) {
      Swal.fire("Error", "Failed to remove course", "error");
    }
  };

  // ================= TOTAL AMOUNT =================
  // const TOTAL_AMOUNT = cartItems.length * 500;
  const TOTAL_AMOUNT = cartItems.reduce(
    (sum, item) => sum + Number(item.selling_price || 0),
    0,
  );

  // ================= EMPTY CART =================
  if (cartItems.length === 0) {
    return <div className="p-10 text-center text-xl">🛒 Cart is empty</div>;
  }

  // ================= UI =================
  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {/* CART ITEMS */}
      <div className="space-y-6">
        {cartItems.map((course, index) => (
          <div
            key={`${course.course_id}-${index}`}
            className="flex items-center gap-6 border p-4 rounded-lg"
          >
            <img
              src={`http://localhost:5500/uploads/${course.image_url}`}
              className="w-40 h-24 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="font-bold text-lg">{course.course_name}</h3>
              <p className="text-sm text-gray-600">{course.duration}</p>
              <p className="text-sm text-gray-500">{course.description}</p>
            </div>

            {/* <p className="font-semibold">₹500</p> */}
            <p className="font-semibold text-green-600">
              ₹{course.selling_price}
            </p>
            <div>
              <p className="font-semibold text-green-600">
                ₹{course.selling_price}
              </p>

              {course.original_price && (
                <p className="text-sm text-gray-400 line-through">
                  ₹{course.original_price}
                </p>
              )}
            </div>

            <button
              onClick={() => removeFromCart(course.course_id)}
              className="text-red-600 font-medium"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="mt-10 flex justify-between items-center border-t pt-6">
        <h2 className="text-xl font-semibold">Total: ₹{TOTAL_AMOUNT}</h2>

        <button
          onClick={() => navigate("/checkout")}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
