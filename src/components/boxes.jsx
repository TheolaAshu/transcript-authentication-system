import React from 'react';

function Box({ children }) {
  return (
    <div className="bg-white rounded shadow p-6 w-1/4">
      { children }
    </div>
  );
}

export default Box;