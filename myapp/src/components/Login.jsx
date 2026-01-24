import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5500/login", {
        email,
        password,
      });

      const { token, teacher } = res.data;

      if (!token || !teacher) {
        throw new Error("Invalid login response");
      }

      localStorage.setItem("teacherToken", token);
      localStorage.setItem("teacherName", teacher.name);
      localStorage.setItem("teacher_id", teacher.teacher_id);
      localStorage.setItem("role", "teacher");

      Swal.fire({
        title: "Success",
        text: "Login successful",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/teacherdashboard");
      });
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Invalid email or password",
        "error",
      );
    }
  };

  return (
    <div
      style={{ backgroundColor: "#faf5ff" }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Learning"
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
          <p className="text-gray-600 mb-6">Login to continue learning</p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-4 py-3 rounded mb-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Log in
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
// ==========================================================================================

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import Swal from "sweetalert2";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5500/login", {
//         email,
//         password,
//       });

//       const { token, role, user } = res.data;

//       localStorage.setItem("token", token);
//       localStorage.setItem("role", role);
//       localStorage.setItem("user_id", user.user_id || user.teacher_id);

//       Swal.fire("Success", "Login successful", "success");

//       if (role === "teacher") {
//         navigate("/teacherdashboard");
//       } else {
//         navigate("/");
//       }
//     } catch (err) {
//       Swal.fire(
//         "Error",
//         err.response?.data?.message || "Login failed",
//         "error",
//       );
//     }
//   };

//   return (
//     <div
//       style={{ backgroundColor: "#faf5ff" }}
//       className="min-h-screen flex items-center justify-center"
//     >
//       <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
//         {/* LEFT IMAGE */}
//         <div className="hidden md:block">
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//             alt="Learning"
//             className="h-full w-full object-cover"
//           />
//         </div>

//         {/* RIGHT FORM */}
//         <div className="p-10">
//           <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
//           <p className="text-gray-600 mb-6">Login to continue learning</p>

//           <form onSubmit={handleLogin}>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full border border-gray-300 px-4 py-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full border border-gray-300 px-4 py-3 rounded mb-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <button
//               type="submit"
//               className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
//             >
//               Log in
//             </button>
//           </form>

//           <p className="text-sm text-center mt-6">
//             Don’t have an account?{" "}
//             <Link
//               to="/signup"
//               className="text-purple-600 font-semibold hover:underline"
//             >
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
