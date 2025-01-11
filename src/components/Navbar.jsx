import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 shadow-md">
      <div className="container mx-auto flex flex-col min-[1110px]:flex-row items-center justify-between">
        <div className="flex justify-between w-full min-[1110px]:w-auto">
          <NavLink to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="min-[1110px]:h-28 min-[1110px]:w-28 h-20 w-20"
            />
          </NavLink>
          <button onClick={() => setIsOpen(!isOpen)} className="min-[1110px]:hidden">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="#ffb6c1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`flex-col min-[1110px]:flex min-[1110px]:flex-row items-center min-[1110px]:justify-end w-full ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-col min-[1110px]:flex-row space-y-4 min-[1110px]:space-y-0 min-[1110px]:space-x-10">
            <NavLink
              to="/compare"
              className="block px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#ffb6c1]"
            >
              Compare Products
            </NavLink>
            <NavLink
              to="/dupes"
              className="block px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#ffb6c1]"
            >
              Dupes
            </NavLink>
            <NavLink
              to="/skincare-routine"
              className="block px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#ffb6c1]"
            >
              Skincare Routine
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#ffb6c1]"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;