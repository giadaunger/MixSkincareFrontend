import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CaretDown } from "styled-icons/bootstrap";

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
              stroke="#E2A3B7"
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
              className="block px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
            >
              Compare Products
            </NavLink>
            <div className="relative group">
              <div className="flex items-center transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] cursor-pointer">
                <p className="block px-4 py-2 text-center text-2xl">Dupes</p>
                <CaretDown className="w-5 h-5"/>
              </div>
              <div className="hidden group-hover:block absolute left-0 min-[1110px]:mt-0 z-50 bg-white shadow-lg rounded-b-lg">
                <NavLink
                  to="/skincare-dupes"
                  className="block px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] whitespace-nowrap"
                >
                  Skincare Dupes
                </NavLink>
                <NavLink
                  to="/haircare-dupes"
                  className="block px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] whitespace-nowrap"
                >
                  Haircare Dupes
                </NavLink>
              </div>
            </div>
            <div className="relative group">
              <div className="flex items-center transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] cursor-pointer">
                <p className="block px-4 py-2 text-center text-2xl">Generate routine</p>
                <CaretDown className="w-5 h-5"/>
              </div>
              <div className="hidden group-hover:block absolute left-0 min-[1110px]:mt-0 z-50 bg-white shadow-lg rounded-b-lg">
                <NavLink
                  to="/skincare-routine"
                  className="block px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] whitespace-nowrap"
                >
                  Skincare Routine
                </NavLink>
                <NavLink
                  to="/skincare-routine"
                  className="block px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] whitespace-nowrap"
                >
                  Haircare Routine
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
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