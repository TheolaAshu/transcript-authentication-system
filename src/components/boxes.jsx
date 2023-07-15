import React from 'react';


const Box = ({ className, style, children }) => {
  return (
    <div className={`bg-white rounded-xl shadow-xl p-4 ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Box;

// const Box = ({ className, children }) => {
//   return (
//     <div className={`bg-white rounded-xl shadow-xl p-4 ${className}`}>
//       {children}
//     </div>
//   );
// };

// export default Box;

// function Box({ children }) {
//   return (
//     <div className="bg-white rounded shadow p-6 w-1/4">
//       { children }
//     </div>
//   );
// }

// export default Box;