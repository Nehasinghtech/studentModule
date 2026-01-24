// import { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";

// function Checkout() {
//   const [cartItems, setCartItems] = useState([]);
//   const [state, setState] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:5500/cart")
//       .then((res) => setCartItems(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   // 💰 PRICE CALCULATION (example ₹500/course)
//   const ORIGINAL_PRICE = cartItems.length * 3500;
//   const DISCOUNT = cartItems.length * 3000;
//   const TOTAL = cartItems.length * 500;

//   // ================= RAZORPAY =================
//   const handleProceed = async () => {
//     try {
//       const orderRes = await axios.post("http://localhost:5500/createorder", {
//         amount: TOTAL * 100,
//       });

//       const { amount, id: order_id, currency } = orderRes.data;

//       const options = {
//         key: "rzp_test_Rdy2zFZuKnEuoI",
//         amount,
//         currency,
//         name: "Udemy Clone",
//         description: "Course Purchase",
//         order_id,

//         handler: async function (response) {
//           await axios.post("http://localhost:5500/verifypayment", {
//             payment_id: response.razorpay_payment_id,
//             order_id: response.razorpay_order_id,
//             signature: response.razorpay_signature,
//             courses: cartItems.map((c) => c.course_id),
//           });

//           Swal.fire("✅ Success", "Payment Successful", "success");
//         },

//         prefill: {
//           name: "Neha User",
//           email: "neha@example.com",
//           contact: "9999999999",
//         },
//         theme: { color: "#6D28D9" },
//       };

//       new window.Razorpay(options).open();
//     } catch (err) {
//       Swal.fire("Error", "Payment failed", "error");
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-10 grid md:grid-cols-3 gap-10">
//       {/* LEFT SECTION */}
//       <div className="md:col-span-2 space-y-8">
//         <h1 className="text-3xl font-bold">Checkout</h1>

//         {/* BILLING */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Billing address</h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             <select className="border p-3 rounded">
//               <option>India</option>
//             </select>

//             <select
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//               className="border p-3 rounded"
//             >
//               <option value="">Please select...</option>
//               <option>Delhi</option>
//               <option>Maharashtra</option>
//               <option>Uttar Pradesh</option>
//             </select>
//           </div>

//           <p className="text-sm text-gray-600 mt-3">
//             Udemy is required by law to collect applicable transaction taxes.
//           </p>
//         </div>

//         {/* PAYMENT */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Payment method</h2>

//           <div className="border rounded p-4 flex items-center gap-3">
//             <input type="radio" checked readOnly />
//             <span className="font-medium">UPI</span>
//           </div>

//           <div className="flex gap-4 mt-4">
//             <button className="border px-4 py-2 rounded">QR code</button>
//             <button className="border px-4 py-2 rounded">UPI ID</button>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="border rounded-lg p-6 bg-gray-50">
//         <h2 className="text-2xl font-bold mb-6">Order summary</h2>

//         <div className="space-y-3 text-gray-700">
//           <div className="flex justify-between">
//             <span>Original Price:</span>
//             <span>₹{ORIGINAL_PRICE}</span>
//           </div>

//           <div className="flex justify-between text-green-600">
//             <span>Discount:</span>
//             <span>-₹{DISCOUNT}</span>
//           </div>
//           <hr />

//           <div className="flex justify-between text-xl font-bold">
//             <span>Total ({cartItems.length} courses):</span>
//             <span>₹{TOTAL}</span>
//           </div>
//         </div>

//         <button
//           onClick={handleProceed}
//           className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-lg flex justify-center items-center gap-2"
//         >
//           🔒 Proceed
//         </button>

//         <p className="text-center mt-6 font-semibold">
//           30-Day Money-Back Guarantee
//         </p>
//         <p className="text-center text-sm text-gray-600">
//           Not satisfied? Get a full refund within 30 days.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Checkout;

import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [state, setState] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5500/cart")
      .then((res) => setCartItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  // 💰 DYNAMIC PRICE CALCULATION (FIXED)
  const ORIGINAL_PRICE = cartItems.reduce(
    (sum, item) => sum + Number(item.original_price || 0),
    0,
  );

  const TOTAL = cartItems.reduce(
    (sum, item) => sum + Number(item.selling_price || 0),
    0,
  );

  const DISCOUNT = ORIGINAL_PRICE - TOTAL;

  // ================= RAZORPAY =================
  const handleProceed = async () => {
    try {
      const orderRes = await axios.post("http://localhost:5500/createorder", {
        amount: TOTAL,
      });

      const { amount, id: order_id, currency } = orderRes.data;

      const options = {
        key: "rzp_test_Rdy2zFZuKnEuoI",
        amount,
        currency,
        name: "Neha Singh",
        description: "Course Purchase",
        order_id,

        handler: async function (response) {
          await axios.post("http://localhost:5500/verifypayment", {
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
            signature: response.razorpay_signature,
            courses: cartItems.map((c) => c.course_id),
            amount: TOTAL,
          });

          Swal.fire("✅ Success", "Payment Successful", "success");
        },

        prefill: {
          name: "Neha User",
          email: "neha@gmail.com",
          contact: "9999999999",
        },
        theme: { color: "#6D28D9" },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      Swal.fire("Error", "Payment failed", "error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-10 grid md:grid-cols-3 gap-10">
      {/* LEFT SECTION */}
      <div className="md:col-span-2 space-y-8">
        <h1 className="text-3xl font-bold">Checkout</h1>

        {/* BILLING */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing address</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <select className="border p-3 rounded">
              <option>India</option>
            </select>

            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="border p-3 rounded"
            >
              <option value="">Please select...</option>
              <option>Delhi</option>
              <option>Maharashtra</option>
              <option>Uttar Pradesh</option>
            </select>
          </div>

          <p className="text-sm text-gray-600 mt-3">
            Udemy is required by law to collect applicable transaction taxes.
          </p>
        </div>

        {/* PAYMENT */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment method</h2>

          <div className="border rounded p-4 flex items-center gap-3">
            <input type="radio" checked readOnly />
            <span className="font-medium">UPI</span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="border rounded-lg p-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">Order summary</h2>

        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between">
            <span>Original Price:</span>
            <span>₹{ORIGINAL_PRICE}</span>
          </div>

          <div className="flex justify-between text-green-600">
            <span>Discount:</span>
            <span>-₹{DISCOUNT}</span>
          </div>
          <hr />

          <div className="flex justify-between text-xl font-bold">
            <span>Total ({cartItems.length} courses):</span>
            <span>₹{TOTAL}</span>
          </div>
        </div>

        <button
          onClick={handleProceed}
          className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-lg"
        >
          🔒 Proceed
        </button>

        <p className="text-center mt-6 font-semibold">
          30-Day Money-Back Guarantee
        </p>
      </div>
    </div>
  );
}

export default Checkout;
