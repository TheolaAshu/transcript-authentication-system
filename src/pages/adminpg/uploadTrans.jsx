import React, { useState } from "react";
import axios from "axios";
import { AdminSidebar } from "../../components/admin-sidebar";

function UploadTrans() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle file upload here
    const formData = new FormData();
    formData.append("file", file);

    const url =
      "https://firebasestorage.googleapis.com/v0/b/t-scripty.appspot.com/o/CEC.pdf?alt=media&token=af0d74a4-9b19-4034-97c1-e675e193d02b";
    axios
      .get("http://localhost:5000/sign-pdf", {
        params: {
          pdfUrl: url,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex h-screen">
      <AdminSidebar />

      <div className="flex-1 flex flex-col justify-center items-center bg-gray-300">
        <form
          onSubmit={handleSubmit}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="mb-4 text-center">
            <label
              className="block text-gray-800 font-bold mb-2"
              htmlFor="file"
            >
              Drag and drop a TRANSCRIPT here or click to choose a file:
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf"
            />
            <div
              className={`w-full px-3 py-32 border border-dashed border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                file ? "bg-gray-100" : ""
              }`}
              onClick={() => document.getElementById("file").click()}
            >
              {file ? (
                <p className="text-gray-500">File selected: {file.name}</p>
              ) : (
                <p className="text-gray-500">
                  Only PDF files are allowed. Maximum file size: 10 MB.
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
            disabled={!file}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadTrans;
