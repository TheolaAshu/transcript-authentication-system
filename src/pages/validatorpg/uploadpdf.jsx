import React from "react";
import { useState } from "react";
import axios from "axios";

function UploadPdf() {
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
    <div className=" flex h-screen ">
      <div className="flex justify-center items-center w-full bg-gray-300">
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
              Choose a pdf to upload:
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
          <button
            onClick={handleGetHash}
            className="bg-blue-800 mt-6 text-white px-4 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-600"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}
export default UploadPdf;

// import React, { useState } from "react";
// import axios from "axios";

// function UploadPdf() {
//   const [file, setFile] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile && selectedFile.type === "application/pdf") {
//       setFile(selectedFile);
//     } else {
//       setFile(null);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const selectedFile = e.dataTransfer.files[0];
//     if (selectedFile && selectedFile.type === "application/pdf") {
//       setFile(selectedFile);
//     } else {
//       setFile(null);
//     }
//     setIsDragging(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("file", file);
//     const url =
//       "https://firebasestorage.googleapis.com/v0/b/t-scripty.appspot.com/o/CEC.pdf?alt=media&token=af0d74a4-9b19-4034-97c1-e675e193d02b";
//     axios
//       .get("http://localhost:5000/sign-pdf", {
//         params: {
//           pdfUrl: url,
//         },
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   function handleGetHash() {
//     const url =
//       "https://firebasestorage.googleapis.com/v0/b/t-scripty.appspot.com/o/files%2Fteola-file.pdf?alt=media&token=5e5f52f6-271e-4cb3-96b1-07c041b026eb";
//     axios
//       .get("http://localhost:5000/get-hash", {
//         params: {
//           pdfUrl: url,
//         },
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   return (
//     <div className="flex h-screen">
//       <div className="flex justify-center items-center w-full bg-gray-100">
//         <form
//           onSubmit={handleSubmit}
//           onDrop={handleDrop}
//           onDragOver={(e) => {
//             e.preventDefault();
//             setIsDragging(true);
//           }}
//           onDragLeave={() => setIsDragging(false)}
//           className="flex flex-col items-center p-6 space-y-6 rounded-lg shadow-lg bg-white"
//         >
//           <label
//             className="block text-center text-gray-800 font-bold mb-2"
//             htmlFor="file"
//           >
//             Choose a PDF to upload:
//           </label>
//           <div
//             className={`w-full h-60 border-2 border-dashed rounded-lg transition-colors duration-200 ${
//               isDragging ? "border-green-500 bg-green-50" : "border-gray-300"
//             }`}
//             onClick={() => document.getElementById("file").click()}
//           >
//             {file ? (
//               <p className="text-green-500 font-semibold truncate">
//                 File selected: {file.name}
//               </p>
//             ) : (
//               <>
//                 <svg
//                   className="w-16 h-16 mx-auto text-gray-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 19l-7-7 7-7"
//                   />
//                 </svg>
//                 <p className="text-gray-400">
//                   Drag and drop your file here or click to browse
//                 </p>
//                 <p className="text-sm text-gray-400">
//                   (Only PDF files are allowed. Maximum file size: 10 MB)
//                 </p>
//               </>
//             )}
//           </div>
//           <input
//             type="file"
//             id="file"
//             className="hidden"
//             onChange={handleFileChange}
//             accept=".pdf"
//           />
//           <button
//             type="submit"
//             className={`${
//               file
//                 ? "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 cursor-pointer"
//                 : "bg-gray-400 cursor-not-allowed"
//             } text-white px-4 py-2 rounded-md transition-colors duration-200`}
//             disabled={!file}
//           >
//             Upload
//           </button>
//           <button
//             onClick={handleGetHash}
//             className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus-outline-none focus:bg-gray-700 transition-colors duration-200"
//           >
//             Verify
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default UploadPdf