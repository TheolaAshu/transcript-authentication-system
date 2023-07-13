import React from "react";
import { useState } from "react";

function ValidationPage() {
  const [isValid, setIsValid] = useState(true);

  const handleValidation = () => {
    // Add code to validate input here
    setIsValid(false);
  };

  return (
    <div className="p-4">
      {isValid ? (
        <>
          <svg className="h-12 w-12 text-green-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.293 14.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L8 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7z"
            />
          </svg>
          <div className="text-green-500 font-bold mb-2">Validation successful!</div>
          <div className="text-gray-700">The input is valid.</div>
        </>
      ) : (
        <>
          <svg className="h-12 w-12 text-red-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 1C4.477 1 0 5.477 0 11s4.477 10 10 10 10-4.477 10-10S15.523 1 10 1zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1.5-6a1 1 0 1 1-2 0v-2a1 1 0 0 1 2 0v2zm1-7.5a1 1 0 0 1-2 0 1 1 0 0 1 2 0z"
            />
          </svg>
          <div className="text-red-500 font-bold mb-2">Validation failed!</div>
          <div className="text-gray-700">The input is not valid.</div>
        </>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-4"
        onClick={handleValidation}
      >
        Validate Input
      </button>
    </div>
  );
}

export default ValidationPage;