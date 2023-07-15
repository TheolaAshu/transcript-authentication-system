import React from "react";
import { useNavigate } from "react-router-dom";

export const AdminSidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Sidebar */}
      <div className="bg-gray-800 w-64 px-4 py-6">
        <h2 className="text-white text-lg font-bold">Dashboard</h2>
        <ul className="mt-6">
          <li
            className="text-gray-400 hover:text-white cursor-pointer"
            onClick={() => navigate("/students")}
          >
            Students
          </li>
          <li
            className="text-gray-400 hover:text-white cursor-pointer"
            onClick={() => navigate("/allTranscripts")}
          >
            Transcripts
          </li>
          <li
            className="text-gray-400 hover:text-white cursor-pointer"
            onClick={() => navigate("/uploadTrans")}
          >
            upload transcripts
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer">
            support requests
          </li>
        </ul>
      </div>
    </>
  );
};
