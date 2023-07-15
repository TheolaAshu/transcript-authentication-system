import React from "react";
import { useState } from "react";
import { AdminSidebar } from "../../components/admin-sidebar";

function SearchFilter() {
  const [searchValue, setSearchValue] = useState("");

  const Students = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
    { id: 4, name: "kelvin" },
    { id: 5, name: "Desmond" },
    { id: 6, name: "Hans" },
    { id: 7, name: "Alice" },
    { id: 8, name: "Ajongafac" },
    { id: 9, name: "Marion" },
    { id: 10, name: "Joalice" },
    { id: 11, name: "Joseph" },
  ];

  const filteredStudents = Students.filter((student) =>
    student.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <AdminSidebar />

      <div className="flex-1 bg-gray-100 px-4 py-6">
        <input
          type="text"
          placeholder="Search students"
          className="py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <ul className="mt-4">
          {filteredStudents.map((student) => (
            <li key={student.id} className="py-2 px-4 border-b border-gray-300">
              {student.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchFilter;

