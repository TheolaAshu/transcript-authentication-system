import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AdminSidebar } from "../../components/admin-sidebar";

const AllTranscripts = () => {
  return (
    <div className="min-h-screen flex felx-col justify-center relative">
      <div className="flex h-screen"><AdminSidebar/></div>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <h1 className="flex justify-center text-3xl font-bold text-gray">
            All Transcripts
          </h1>
        </div>
        <div className="mt-6">
          <form className="flex items-center h-[60px] bg-red-500 flex-row">
            <input
              type="text"
              className="h-full px-8 rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Search transcripts..."
            />
            <button className="h-full px-8 rounded-r-lg p-4 border-t mr-0 border-b border-r bg-blue-500 text-white fond-bold border-blue-500 hover:bg-blue-700">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllTranscripts;
