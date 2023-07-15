import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../pages/assets/dropdown";


const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
    if (showDropdown2) {
      setShowDropdown2(false);
    }
  };

  const handleToggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
    if (showDropdown) {
      setShowDropdown(false);
    }
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items center h-24  [max-w-1240px] mx-auto px-4 text-white drop-shadow-2xl shadow-slate-300 bg-[#0c173b]">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] p-8">
        T-Scripty
      </h1>
    
      <ul className="hidden md:flex">
        <li
          className="p-5 bg-[#00df9a] w-[100px] rounded-full font-medium my-6 mx-8 text-center  py-3"
          onClick={handleToggleDropdown}
        >
          Signup
        </li>
        {showDropdown && (
          <DropdownMenu
            data={[
              { name: "As Admin", path: "/asignup" },
              { name: "As Student", path: "/signup" },
              { name: "As validator", path: "/vsignup" },
            ]}
            position={"right-70"}
          />
        )}
        <li
          className="p-5 bg-[#00df9a] w-[100px] rounded-full font-medium my-6 mx-8 text-center  py-3"
          onClick={handleToggleDropdown2}
        >
          Login
        </li>
        {showDropdown2 && (
          <DropdownMenu
            data={[
              { name: "As Admin", path: "/adminlogin" },
              { name: "As Student", path: "/login" },
              { name: "As validator", path: "/validlogin" },
            ]}
            position={"right-40"}
          />
        )}
        <li className="p-5 bg-[#1ac096] w-[100px] rounded-full font-medium my-6 mx-8 text-center  py-3">
          Logout
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {nav && (
        <div
          className={
            "fixed left-0 top-0 w-[60%] h-screen border-r-gray-900 bg-gray-500 ease-in-out duration-500 md:hidden"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            T-Scripty
          </h1> 
            <ul className="uppercase p-4 bg-gray-500">
            <li
              className="p-4 border-b border-gray-600 text-white"
              onClick={() => navigate("/signup")}
            >
              Signup
            </li>
            <li
              className="p-4 border-b border-gray-600 text-white"
              onClick={() => navigate("/login")}
            >
              Login
            </li>
            <li
              className="p-4 border-b border-gray-600 text-white"
              onClick={() => navigate("/logout")}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
