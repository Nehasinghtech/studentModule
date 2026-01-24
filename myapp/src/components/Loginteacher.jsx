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

      if (!res.data || !res.data.token || !res.data.role) {
        Swal.fire("Error", "Login response invalid", "error");
        return;
      }

      const { token, role } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      Swal.fire({
        title: "Success",
        text: "Login successful",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        if (role === "teacher") {
          // window.location.href = "/teacherdashboard";
          window.location.href = "/teacherlayout";
        } else {
          navigate("/");
        }
      });
    } catch (err) {
      Swal.fire("Error", "Invalid email or password", "error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <form onSubmit={handleLogin}>
        <input
          className="w-full border p-2 mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-purple-600 text-white p-2 rounded">
          Login
        </button>
      </form>

      {/* ✅ SIGNUP LINK */}
      <p className="text-center text-sm mt-4">
        Don&apos;t have an account?{" "}
        <Link
          to="/signup"
          className="text-purple-600 font-semibold hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
