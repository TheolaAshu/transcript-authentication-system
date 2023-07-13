import React from "react";

function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg className="animate-spin h-16 w-16 text-blue-500" viewBox="0 0 24 24">
        <path d="M12 2.69V5a1 1 0 0 1-2 0V2.69a10 10 0 0 1 7.38 18.16l1.43-1.43A8 8 0 0 0 4.62 4.31l1.43 1.43A10 10 0 0 1 12 2.69z" />
      </svg>
    </div>
  );
}

export default LoadingPage;
