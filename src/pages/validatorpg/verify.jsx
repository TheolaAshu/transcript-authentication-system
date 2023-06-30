import React from "react";
import { useState, useEffect } from "react";

function VerifyingPage() {
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    // Simulate a delay in verifying for 3 seconds
    const timeout = setTimeout(() => {
      setIsVerifying(false);
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  if (isVerifying) {
    return (
      <div className="flex justify-center items-center h-screen">
        <svg className="animate-spin h-16 w-16 text-blue-500" viewBox="0 0 24 24">
          <path d="M12 2.69V5a1 1 0 0 1-2 0V2.69a10 10 0 0 1 7.38 18.16l1.43-1.43A8 8 0 0 0 4.62 4.31l1.43 1.43A10 10 0 0 1 12 2.69z" />
        </svg>
        <div className="ml-4 text-gray-700">Verifying...</div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <svg className="h-12 w-12 text-green-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M9.293 14.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L8 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7z"
        />
      </svg>
      <div className="text-green-500 font-bold mb-2">Verification successful!</div>
      <div className="text-gray-700">You may now proceed to the next step.</div>
    </div>
  );
}

export default VerifyingPage;