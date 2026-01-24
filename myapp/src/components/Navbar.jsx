// import { Link, useNavigate } from "react-router-dom";
// import { ShoppingCart, Globe } from "lucide-react";
// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useCart } from "../components/CartContext";

// function Navbar() {
//   const { cartCount } = useCart();
//   const [search, setSearch] = useState("");
//   const [results, setResults] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   /* 🔍 SEARCH API */
//   useEffect(() => {
//     if (!search.trim()) {
//       setResults([]);
//       setShowDropdown(false);
//       return;
//     }

//     const delay = setTimeout(() => {
//       axios
//         .get(`http://localhost:5500/search?q=${search}`)
//         .then((res) => {
//           setResults(res.data);
//           setShowDropdown(true);
//         })
//         .catch((err) => console.error(err));
//     }, 400);

//     return () => clearTimeout(delay);
//   }, [search]);

//   /* 🔹 Close dropdown on outside click */
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setShowDropdown(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleTeachClick = () => {
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     if (role !== "teacher") {
//       navigate("/signup");
//       return;
//     }

//     // window.open("/teacherdashboard", "_blank");
//     // window.open("/teacherlayout", "_blank");
//   };

//   return (
//     <nav className="bg-gray-300 shadow px-4 py-3 flex items-center justify-between relative">
//       {/* LEFT */}
//       <div className="flex items-center space-x-6">
//         <Link to="/" className="text-2xl font-bold text-black">
//           <span className="text-purple-600">u</span>demy
//         </Link>

//         <button className="hidden md:block text-gray-700 hover:text-purple-600">
//           Explore
//         </button>
//       </div>

//       {/* SEARCH */}
//       <div
//         className="flex-grow max-w-xl mx-6 hidden md:block relative"
//         ref={dropdownRef}
//       >
//         <input
//           type="text"
//           placeholder="Search for anything"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           onFocus={() => search && setShowDropdown(true)}
//           className="w-full border rounded-full px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
//         />

//         {showDropdown && results.length > 0 && (
//           <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-lg border z-50 max-h-96 overflow-y-auto">
//             {results.map((course) => (
//               <Link
//                 key={course.course_id}
//                 to={`/course/${course.course_id}`}
//                 onClick={() => setShowDropdown(false)}
//                 className="flex gap-3 p-3 hover:bg-gray-100 border-b"
//               >
//                 <p className="font-semibold text-sm">{course.course_name}</p>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* RIGHT */}
//       <div className="flex items-center space-x-4">
//         <Link
//           to="/plans"
//           className="hidden md:block text-gray-700 hover:text-purple-600"
//         >
//           Plans & Pricing
//         </Link>

//         <Link
//           to="/business"
//           className="hidden md:block text-gray-700 hover:text-purple-600"
//         >
//           Udemy Business
//         </Link>

//         {/*  UPDATED TEACH BUTTON */}
//         <button
//           onClick={handleTeachClick}
//           className="hidden md:block text-gray-700 hover:text-purple-600"
//         >
//           Teach on Udemy
//         </button>

//         {/* CART */}
//         <Link to="/cart" className="relative">
//           <ShoppingCart size={26} />
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//               {cartCount}
//             </span>
//           )}
//         </Link>

//         <Link
//           to="/login"
//           className="border px-4 py-1 rounded font-medium hover:bg-gray-100"
//         >
//           Log in
//         </Link>

//         <Link
//           to="/signup"
//           className="bg-purple-600 text-white px-4 py-1 rounded font-medium hover:bg-purple-700"
//         >
//           Sign up
//         </Link>

//         <button className="border px-2 py-1 rounded hover:bg-gray-100">
//           <Globe size={18} />
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Globe, LogOut } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useCart } from "../components/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // 🔐 AUTH STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  /* 🔐 CHECK LOGIN STATUS (on load + refresh) */
  useEffect(() => {
    const token = localStorage.getItem("teacherToken");
    setIsLoggedIn(!!token);
  }, []);

  /* 🔍 SEARCH API */
  useEffect(() => {
    if (!search.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const delay = setTimeout(() => {
      axios
        .get(`http://localhost:5500/search?q=${search}`)
        .then((res) => {
          setResults(res.data);
          setShowDropdown(true);
        })
        .catch((err) => console.error(err));
    }, 400);

    return () => clearTimeout(delay);
  }, [search]);

  /* 🔹 Close dropdown on outside click */
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* 👨‍🏫 TEACH BUTTON LOGIC */
  const handleTeachClick = () => {
    const token = localStorage.getItem("teacherToken");
    const role = localStorage.getItem("role");

    if (!token) {
      navigate("/login");
      return;
    }

    if (role !== "teacher") {
      navigate("/signup");
      return;
    }

    // ✅ Logged in teacher → dashboard
    navigate("/teacherdashboard");
  };

  /* 🚪 LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("teacherToken");
    localStorage.removeItem("teacherName");
    localStorage.removeItem("teacher_id");
    localStorage.removeItem("role");

    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-300 shadow px-4 py-3 flex items-center justify-between relative">
      {/* LEFT */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-2xl font-bold text-black">
          <span className="text-purple-600">u</span>demy
        </Link>

        <button className="hidden md:block text-gray-700 hover:text-purple-600">
          Explore
        </button>
      </div>

      {/* SEARCH */}
      <div
        className="flex-grow max-w-xl mx-6 hidden md:block relative"
        ref={dropdownRef}
      >
        <input
          type="text"
          placeholder="Search for anything"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => search && setShowDropdown(true)}
          className="w-full border rounded-full px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
        />

        {showDropdown && results.length > 0 && (
          <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-lg border z-50 max-h-96 overflow-y-auto">
            {results.map((course) => (
              <Link
                key={course.course_id}
                to={`/course/${course.course_id}`}
                onClick={() => setShowDropdown(false)}
                className="flex gap-3 p-3 hover:bg-gray-100 border-b"
              >
                <p className="font-semibold text-sm">{course.course_name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className="flex items-center space-x-4">
        <Link
          to="/plans"
          className="hidden md:block text-gray-700 hover:text-purple-600"
        >
          Plans & Pricing
        </Link>

        <Link
          to="/business"
          className="hidden md:block text-gray-700 hover:text-purple-600"
        >
          Udemy Business
        </Link>

        <button
          onClick={handleTeachClick}
          className="hidden md:block text-gray-700 hover:text-purple-600"
        >
          Teach on Udemy
        </button>

        {/* CART */}
        <Link to="/cart" className="relative">
          <ShoppingCart size={26} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>

        {/* 🔐 AUTH BUTTONS */}
        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="border px-4 py-1 rounded font-medium hover:bg-gray-100"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              className="bg-purple-600 text-white px-4 py-1 rounded font-medium hover:bg-purple-700"
            >
              Sign up
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 border px-3 py-1 rounded font-medium text-red-600 hover:bg-red-100 transition"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        )}

        <button className="border px-2 py-1 rounded hover:bg-gray-100">
          <Globe size={18} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
