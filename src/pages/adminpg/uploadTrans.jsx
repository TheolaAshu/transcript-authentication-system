import React, { useState, useEffect, useContext } from "react";
import { AdminSidebar } from "../../components/admin-sidebar";
import { BASE_URL } from "../../config";
import { AuthContext } from "../../context/AuthContext";

function UploadTrans() {
  const [file, setFile] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const { token } = useContext(AuthContext);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    // Fetch users from Firebase
    const getUsers = async () => {
      try {
        const response = await fetch(`${BASE_URL}/auth/students`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const usersData = await response.json();
          setUsers(usersData);
        } else {
          console.error("Failed to fetch users:", response.status);
          // Handle error
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
        // Handle error
      }
    };
    getUsers();
  }, [token]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    if (!file || !selectedUser) {
      return;
    }
    console.log(selectedUser);
    const formData = new FormData();
    formData.append("pdfFile", file);
    formData.append("user", selectedUser.id);

    console.log(formData);

    const options = {
      method: "POST",
      body: formData,
    };

    await fetch(`${BASE_URL}/pdf/sign`, options)
      .then((res) => res.json())
      .then((data) => {
        setIsloading(false);
        console.log(data);
        const { url, hash } = data;
        console.log(`PDF signed successfully. URL: ${url}, Hash: ${hash}`);
      })
      .catch((error) => {
        console.error("Failed to sign PDF:", error);
        setIsloading(false);
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
          <div className="mb-4 text-center">
            <label
              className="block text-gray-800 font-bold mb-2"
              htmlFor="user"
            >
              Select a user to upload the transcript:
            </label>
            <select
              id="user"
              className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={selectedUser ? selectedUser.id : ""}
              onChange={async (e) => {
                setSelectedUser(
                  users.find((user) => user.id === e.target.value)
                );
              }}
            >
              <option value="">Select a user</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full align-middle justify-center items-center flex">
            <button
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600 w-[20%]"
              disabled={!file || !selectedUser}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadTrans;
