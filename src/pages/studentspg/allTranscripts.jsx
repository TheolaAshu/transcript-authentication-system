import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Box from '../../components/boxes';

const AllTranscripts = () => {
  return (
  
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 w-64 px-4 py-6">
        <h2 className="text-white text-lg font-bold">Dashboard</h2>
        <ul className="mt-6">
          <li className="text-gray-400 hover:text-white cursor-pointer">
            Students
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer">
            Transcripts
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer">
            Orders
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 px-4 py-6">
        <h2 className="text-gray-800 text-lg font-bold">Welcome to the dashboard!</h2>
        <p className="text-gray-600 mt-2">
          Here, you can manage users, products, and orders.
        </p>
        <div className="flex flex-col gap-2">
    <Box>
      <h2 className="text-lg font-bold bg-red-500">Box 1</h2>
      <p className="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        euismod euismod turpis, vel dapibus velit consectetur at.
      </p>
    </Box>
    <Box>
      <h2 className="text-lg font-bold">Box 2</h2>
      <p className="mt-2">
        Etiam auctor, lacus quis sollicitudin malesuada, sapien turpis
        consequat tellus, non tempus velit nisl a massa. Aliquam auctor,
        ligula sed aliquet bibendum.
      </p>
    </Box>
  </div>
      </div>
    
  </div>
  );
};
export default AllTranscripts

/* //     <div className="min-h-screen flex felx-col justify-center relative bg-gray-700">
//     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//       <div className="flex justify-between">
//         <h1 className="flex justify-center text-3xl font-bold text-white">All Transcripts</h1>
//       </div>
//       <div className="mt-6">
//         <form className="flex items-center h-[60px] bg-red-500 flex-row">
//           <input type="text" className="h-full px-8 rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Search transcripts..." />
//           <button className="h-full px-8 rounded-r-lg p-4 border-t mr-0 border-b border-r bg-blue-500 text-white fond-bold border-blue-500 hover:bg-blue-700">
//           <AiOutlineSearch/>
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
//   );
// } */




