import React from "react";
import Box from "../../components/boxes";
import { AdminSidebar } from "../../components/admin-sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 px-4 py-6">
        <h2 className="text-gray-800 text-lg font-bold">
          Welcome to the dashboard!
        </h2>
        <p className="text-gray-600 mt-2">
          Manage your students, transcripts, and support requests.
        </p>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mt-6">
          <Box className="bg-white rounded-xl shadow-xl p-4 md:w-1/2">
            <h2 className="text-lg font-bold text-red-500">Box 1</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus euismod euismod turpis, vel dapibus velit consectetur
              at.
            </p>
          </Box>
          <Box className="bg-white rounded-xl shadow-xl p-4 md:w-1/2">
            <h2 className="text-lg font-bold">Box 2</h2>
            <p className="mt-2">
              Etiam auctor, lacus quis sollicitudin malesuada, sapien turpis
              consequat tellus, non tempus velit nisl a massa. Aliquam auctor,
              ligula sed aliquet bibendum.
            </p>
          </Box>
          <Box className="bg-white rounded-xl shadow-xl p-4 md:w-1/2">
            <h2 className="text-lg font-bold">Box 3</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus euismod euismod turpis, vel dapibus velit consectetur
              at.
            </p>
          </Box>
          <Box className="bg-white rounded-xl shadow-xl p-4 md:w-1/2">
            <h2 className="text-lg font-bold">Box 4</h2>
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

export default Dashboard;





