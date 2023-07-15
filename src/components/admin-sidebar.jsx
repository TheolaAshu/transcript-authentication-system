import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaChalkboardTeacher, FaFileAlt, FaUpload, FaHeadset } from "react-icons/fa";

export const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Sidebar */}
      <div className="bg-gray-800 w-64 px-4 py-6">
        <h2 className="text-white text-lg font-bold mb-6">
          <FaChalkboardTeacher className="inline-block text-blue-500 mr-2" />
          Dashboard
        </h2>
        <ul>
          <li
            className={`${
              location.pathname === "/students"
                ? "text-white bg-blue-500"
                : "text-gray-400 hover:text-white"
            } cursor-pointer py-2 px-4 rounded-md mb-2`}
            onClick={() => navigate("/students")}
          >
            <FaChalkboardTeacher className="inline-block mr-2" />
            Students
          </li>
          <li
            className={`${
              location.pathname === "/allTranscripts"
                ? "text-white bg-blue-500"
                : "text-gray-400 hover:text-white"
            } cursor-pointer py-2 px-4 rounded-md mb-2`}
            onClick={() => navigate("/allTranscripts")}
          >
            <FaFileAlt className="inline-block mr-2" />
            Transcripts
          </li>
          <li
            className={`${
              location.pathname === "/uploadTrans"
                ? "text-white bg-blue-500"
                : "text-gray-400 hover:text-white"
            } cursor-pointer py-2 px-4 rounded-md mb-2`}
            onClick={() => navigate("/uploadTrans")}
          >
            <FaUpload className="inline-block mr-2" />
            Upload Transcripts
          </li>
          <li
            className={`${
              location.pathname === "/supportRequests"
                ? "text-white bg-blue-500"
                : "text-gray-400 hover:text-white"
            } cursor-pointer py-2 px-4 rounded-md mb-2`}
            onClick={() => navigate("/supportRequests")}
          >
            <FaHeadset className="inline-block mr-2" />
            Support Requests
          </li>
        </ul>
      </div>
    </>
  );
};