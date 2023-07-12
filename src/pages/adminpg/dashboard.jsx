import React from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '../../components/boxes';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
  
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 w-64 px-4 py-6">
        <h2 className="text-white text-lg font-bold">Dashboard</h2>
        <ul className="mt-6">
          <li className="text-gray-400 hover:text-white cursor-pointer" onClick={()=> navigate('/students')}>
            Students
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer" onClick={()=> navigate('allTranscripts')}>
            Transcripts
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer" onClick={()=> navigate('allTranscripts')}>
            upload tramscripts
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer">
            support requests
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 px-4 py-6">
        <h2 className="text-gray-800 text-lg font-bold">Welcome to the dashboard!</h2>
        <p className="text-gray-600 mt-2">
          Manage your students, transcripts, and support requests.
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
export default Dashboard




