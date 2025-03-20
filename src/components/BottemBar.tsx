import React from "react";
import { Link } from "react-router-dom";

const bottemBar = () => {
  return (
    <div className="fixed bottom-0 w-screen p-5 flex flex-col items-center z-10 sm:hidden">
      <div className=" bg-[#0796EF] flex justify-around w-full p-3 rounded-lg">
        <button className="text-white">
          <Link to="/" className="text-white">
            Home
          </Link>
        </button>
        <button className="text-white">
          <Link to="/" className="text-white">
            Menu
          </Link>
        </button>
        <button className="text-white">
          <Link to="/add" className="text-white">
            Add Menu
          </Link>
        </button>
      </div>
    </div>
  );
};

export default bottemBar;
