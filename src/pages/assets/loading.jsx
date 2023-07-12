import React from 'react'
import { useState, useEffect } from "react";

function LoadingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay in loading for 3 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <svg className="animate-spin h-16 w-16 text-blue-500" viewBox="0 0 24 24">
          <path d="M12 2.69V5a1 1 0 0 1-2 0V2.69a10 10 0 0 1 7.38 18.16l1.43-1.43A8 8 0 0 0 4.62 4.31l1.43 1.43A10 10 0 0 1 12 2.69z" />
        </svg>
      </div>
    );
  }

  return <div>WELCOME</div>;

}

export default LoadingPage;
