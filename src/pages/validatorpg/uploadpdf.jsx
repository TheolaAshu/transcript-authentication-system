import React from "react";
import { useState } from "react";
import axios from "axios";

function UploadPdf() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle file upload here
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

  function handleGetHash() {
    const url =
      "https://firebasestorage.googleapis.com/v0/b/t-scripty.appspot.com/o/files%2Fteola-file.pdf?alt=media&token=5e5f52f6-271e-4cb3-96b1-07c041b026eb";
    axios
      .get("http://localhost:5000/get-hash", {
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
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="file">
            Choose a pdf to upload:
          </label>
          <input
            type="file"
            id="file"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          disabled={!file}
        >
          Upload
        </button>
      </form>
      <button
      onClick={handleGetHash}
          className="bg-red-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Verify Hash
        </button>
    </div>
  );
}

export default UploadPdf;
