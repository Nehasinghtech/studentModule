import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaVideo, FaPlay, FaDownload } from "react-icons/fa";
import Swal from "sweetalert2";

const SyllabusManagement = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [topics, setTopics] = useState([]);
  const [videos, setVideos] = useState({});
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [syllabusId, setSyllabusId] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [topicName, setTopicName] = useState("");
  const [description, setDescription] = useState("");

  const token = localStorage.getItem("teacherToken");

  /* ================= FETCH COURSES ================= */
  useEffect(() => {
    if (!token) return;

    axios
      .get("http://localhost:5500/teacher/courses", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setCourses(res.data || []))
      .catch(() => Swal.fire("Error", "Failed to load courses", "error"));
  }, [token]);

  /* ================= FETCH SYLLABUS ================= */
  const fetchSyllabusAgain = () => {
    if (!selectedCourse || !token) return;

    setLoading(true);
    axios
      .get(`http://localhost:5500/teacher/syllabus/${selectedCourse}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTopics(res.data || []))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchSyllabusAgain();
  }, [selectedCourse]);

  /* ================= FETCH VIDEOS ================= */

  const fetchVideosBySyllabus = async (syllabus_id) => {
    try {
      const res = await axios.get(
        `http://localhost:5500/teacher/syllabus/${syllabus_id}/videos`,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      if (!res.data || res.data.length === 0) {
        Swal.fire("No Video", "No video found for this topic", "info");

        setVideos((prev) => ({
          ...prev,
          [syllabus_id]: [],
        }));
        return;
      }

      setVideos((prev) => ({
        ...prev,
        [syllabus_id]: res.data,
      }));
    } catch {
      Swal.fire("Error", "Failed to load videos", "error");
    }
  };

  /* ================= UPLOAD VIDEO ================= */
  const uploadVideo = async (syllabus_id, file) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("syllabus_id", syllabus_id);
    formData.append("video_description", "Introduction video");
    formData.append("tutorial_link", "https://youtube.com/...");
    formData.append("video", file);

    try {
      await axios.post("http://localhost:5500/teacher/upload-video", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire("Success", "Video Uploaded", "success");
      fetchVideosBySyllabus(syllabus_id);
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Upload failed",
        "error",
      );
    }
  };

  /* ================= ADD SYLLABUS ================= */
  const handleAddSyllabus = async () => {
    if (!syllabusId || !selectedCourse || !subjectId || !topicName) {
      Swal.fire("Warning", "All required fields must be filled", "warning");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5500/addsyllabus",
        {
          syllabus_id: syllabusId,
          course_id: selectedCourse,
          subject_id: subjectId,
          topic_name: topicName,
          description,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      Swal.fire("Success", "Syllabus added successfully", "success");
      setShowModal(false);

      setSyllabusId("");
      setSubjectId("");
      setTopicName("");
      setDescription("");

      fetchSyllabusAgain();
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Failed to add syllabus",
        "error",
      );
    }
  };

  const uploadPdf = async (syllabus_id, file) => {
    if (!file) return;

    if (!token) {
      Swal.fire("Unauthorized", "Please login again", "error");
      return;
    }

    const formData = new FormData();
    formData.append("syllabus_id", syllabus_id);
    formData.append("pdf", file);

    try {
      await axios.post(
        "http://localhost:5500/teacher/upload-syllabus-pdf",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // ❌ Content-Type manually mat do (axios khud set karega)
          },
        },
      );

      Swal.fire("Success", "PDF uploaded successfully", "success");
      fetchSyllabusAgain();
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "PDF upload failed",
        "error",
      );
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📘 Syllabus Management</h1>

        <button
          onClick={() => {
            if (!selectedCourse) {
              Swal.fire(
                "Select Course",
                "Please select a course first",
                "warning",
              );
              return;
            }
            setShowModal(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Syllabus
        </button>
      </div>

      {/* COURSE SELECT */}
      <select
        className="border p-3 rounded-lg w-1/3 mb-6 shadow"
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        <option value="">Select Course</option>
        {courses.map((c) => (
          <option key={c.course_id} value={c.course_id}>
            {c.course_name}
          </option>
        ))}
      </select>

      {loading && <p>Loading syllabus...</p>}

      {/* SYLLABUS LIST */}
      <div className="space-y-4">
        {!loading && topics.length === 0 && selectedCourse && (
          <p className="text-gray-500">No syllabus found</p>
        )}

        {topics.map((topic) => (
          <div
            key={topic.syllabus_id}
            className="bg-white rounded-xl shadow p-5"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{topic.topic_name}</h3>
                <p className="text-gray-500 text-sm">{topic.description}</p>
              </div>

              {/* UPLOAD VIDEO */}
              <label className="cursor-pointer text-purple-600 flex items-center gap-2">
                <FaVideo />
                <span className="text-sm">Upload</span>
                <input
                  type="file"
                  hidden
                  accept="video/*"
                  onChange={(e) =>
                    uploadVideo(topic.syllabus_id, e.target.files[0])
                  }
                />
              </label>
              <label className="cursor-pointer text-red-600 flex items-center gap-2">
                📄 Upload PDF
                <input
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) =>
                    uploadPdf(topic.syllabus_id, e.target.files[0])
                  }
                />
              </label>
            </div>

            <button
              className="mt-3 text-blue-600 text-sm"
              onClick={() => fetchVideosBySyllabus(topic.syllabus_id)}
            >
              View Videos
            </button>

            {(videos[topic.syllabus_id] || []).map((v) => (
              <div
                key={v.video_id}
                className="flex items-center justify-between mt-2 bg-gray-50 p-2 rounded"
              >
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() =>
                    setActiveVideo(
                      `http://localhost:5500/uploads/videos/${v.video_url}`,
                    )
                  }
                >
                  <FaPlay className="text-green-600" />
                  <span className="text-sm">{v.video_title}</span>
                </div>
                {topic.pdf_file && (
                  <a
                    href={`http://localhost:5500/uploads/pdfs/${topic.pdf_file}`}
                    target="_blank"
                    className="text-blue-600 text-sm mt-2 inline-block"
                  >
                    View / Download PDF
                  </a>
                )}

                <a
                  href={`http://localhost:5500/uploads/videos/${v.video_url}`}
                  download
                  className="text-blue-600"
                >
                  <FaDownload />
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ADD SYLLABUS MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Add Syllabus</h2>

            <input
              type="text"
              placeholder="Syllabus ID"
              className="border p-2 w-full mb-3"
              value={syllabusId}
              onChange={(e) => setSyllabusId(e.target.value)}
            />

            <input
              type="text"
              className="border p-2 w-full mb-3 bg-gray-100"
              value={selectedCourse}
              readOnly
            />

            <input
              type="text"
              placeholder="Subject ID"
              className="border p-2 w-full mb-3"
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
            />

            <input
              type="text"
              placeholder="Topic Name"
              className="border p-2 w-full mb-3"
              value={topicName}
              onChange={(e) => setTopicName(e.target.value)}
            />

            <textarea
              placeholder="Description"
              className="border p-2 w-full mb-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleAddSyllabus}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO PLAYER */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 w-2/3">
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded"
            />
            <button
              className="mt-3 text-red-600"
              onClick={() => setActiveVideo(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SyllabusManagement;
