// import React, { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     teacher_id: "",
//     name: "",
//     email: "",
//     password: "",
//     qualification: "",
//     specialization: "",
//     bio: "",
//     phone_number: "",
//     status: "active",
//   });

//   const [profileImage, setProfileImage] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setProfileImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     Object.keys(formData).forEach((key) => data.append(key, formData[key]));
//     if (profileImage) data.append("profile_image", profileImage);

//     try {
//       const res = await axios.post(
//         "http://localhost:5500/signupteacher",
//         data,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );
//       alert(res.data.message);
//       setFormData({
//         teacher_id: "",
//         name: "",
//         email: "",
//         password: "",
//         qualification: "",
//         specialization: "",
//         bio: "",
//         phone_number: "",
//         status: "active",
//       });
//       setProfileImage(null);
//     } catch (err) {
//       alert(err.response?.data?.message || "Error signing up");
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#f3f4f6",
//         padding: "20px",
//       }}
//     >
//       <div
//         style={{
//           background: "#fff",
//           padding: "25px 35px",
//           borderRadius: "12px",
//           boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
//           width: "100%",
//           maxWidth: "500px",
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "20px",
//             color: "#333",
//             fontSize: "24px",
//             fontWeight: "600",
//           }}
//         >
//           Teacher Sign Up
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {[
//             { label: "Teacher ID", name: "teacher_id", type: "text" },
//             { label: "Name", name: "name", type: "text" },
//             { label: "Email", name: "email", type: "email" },
//             { label: "Password", name: "password", type: "password" },
//             { label: "Qualification", name: "qualification", type: "text" },
//             { label: "Specialization", name: "specialization", type: "text" },
//             { label: "Bio", name: "bio", type: "text" },
//             { label: "Phone Number", name: "phone_number", type: "text" },
//             // { label: "Status", name: "status", type: "text" },
//           ].map((field, i) => (
//             <input
//               key={i}
//               type={field.type}
//               name={field.name}
//               placeholder={field.label}
//               value={formData[field.name]}
//               onChange={handleChange}
//               required={
//                 field.name !== "qualification" &&
//                 field.name !== "specialization" &&
//                 field.name !== "bio"
//               }
//               style={{
//                 width: "100%",
//                 padding: "10px 12px",
//                 marginBottom: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 fontSize: "14px",
//                 outline: "none",
//                 transition: "0.2s",
//               }}
//               onFocus={(e) => (e.target.style.borderColor = "#16a34a")}
//               onBlur={(e) => (e.target.style.borderColor = "#ccc")}
//             />
//           ))}

//           <input
//             type="file"
//             onChange={handleFileChange}
//             accept="image/*"
//             style={{
//               width: "100%",
//               padding: "8px",
//               marginBottom: "15px",
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               fontSize: "14px",
//               cursor: "pointer",
//             }}
//           />

//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: "12px",
//               background: "#4f46e5",
//               color: "#fff",
//               fontSize: "16px",
//               fontWeight: "600",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               transition: "0.3s",
//             }}
//             // onMouseOver={(e) => (e.target.style.background = "#4f46e5")}
//             // onMouseOut={(e) => (e.target.style.background = "#16a34a")}
//           >
//             Sign Up
//           </button>
//         </form>

//         <p
//           style={{
//             textAlign: "center",
//             marginTop: "15px",
//             fontSize: "14px",
//             color: "#666",
//           }}
//         >
//           Already have an account?{" "}
//           <a
//             href="/login"
//             style={{
//               color: "#4f46e5",
//               fontWeight: "bold",
//               textDecoration: "none",
//             }}
//           >
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    teacher_id: "",
    name: "",
    email: "",
    password: "",
    qualification: "",
    specialization: "",
    bio: "",
    phone_number: "",
    status: "active",
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (profileImage) data.append("profile_image", profileImage);

    try {
      const res = await axios.post(
        "http://localhost:5500/signupteacher",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      Swal.fire("Success", res.data.message, "success").then(() => {
        navigate("/login");
      });

      setProfileImage(null);
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Signup failed",
        "error"
      );
    }
  };

  return (
    <div
      style={{ backgroundColor: "#faf5ff" }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
            alt="Teacher signup"
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-10 overflow-y-auto max-h-screen">
          <h2 className="text-3xl font-bold mb-2">Become an Instructor</h2>
          <p className="text-gray-600 mb-6">Create your teacher account</p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              name="teacher_id"
              placeholder="Teacher ID"
              value={formData.teacher_id}
              onChange={handleChange}
              required
              className="input"
            />

            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input"
            />

            <input
              name="qualification"
              placeholder="Qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="input"
            />

            <input
              name="specialization"
              placeholder="Specialization"
              value={formData.specialization}
              onChange={handleChange}
              className="input"
            />

            <input
              name="bio"
              placeholder="Short Bio"
              value={formData.bio}
              onChange={handleChange}
              className="input"
            />

            <input
              name="phone_number"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              className="input"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border rounded px-3 py-2"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Sign Up as Teacher
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* SMALL CSS HELPER */}
      <style>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
        }
        .input:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 1px #8b5cf6;
        }
      `}</style>
    </div>
  );
};

export default Signup;
