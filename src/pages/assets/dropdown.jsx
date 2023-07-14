import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ data, position }) => {
  const renderedItems = data.map((item) => (
    <div key={item.name}>
      <Link className="text-black" to={item.path}>
        {item.name}
      </Link>
    </div>
  ));

  return (
    <div
      className={`absolute top-20 ${position} mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10`}
    >
      {renderedItems}
    </div>
  );
};

export default DropdownMenu;
