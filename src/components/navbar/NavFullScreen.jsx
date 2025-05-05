import React from 'react'
import { NavLink } from "react-router-dom";
import { CaretDown } from "styled-icons/bootstrap";

function NavFullScreen() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <NavLink to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-28 w-28"
          />
        </NavLink>
      </div>
      <div className="flex flex-row gap-5">
        <NavLink 
          to="/blog"
          className="px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
        >
          Blog
        </NavLink>
        <NavLink 
          to="/about"
          className="px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
        >
          About
        </NavLink>
        <NavLink 
          to="/sales"
          className="px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
        >
          Sales
        </NavLink>
        <div className="relative group mr-4">
          <div className="flex items-center transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] cursor-pointer">
            <p className="block px-4 py-2 text-center text-2xl">Tools</p>
            <CaretDown className="w-5 h-5"/>
          </div>
          <div className="hidden group-hover:block absolute -left-16 min-[1110px]:mt-0 z-50 w-56 bg-white shadow-lg rounded-b-lg">
            <NavLink
              to="/skincare-dupes"
              className="block px-4 py-2 text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] whitespace-nowrap"
            >
              Skincare Dupes
            </NavLink>
            {/* <NavLink
              to="/haircare-dupes"
              className="block px-4 py-2 text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] whitespace-nowrap"
            >
              Haircare Dupes
            </NavLink> */}
            <NavLink
              to="/compare"
              className="block px-4 py-2 text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
            >
              Compare Products
            </NavLink>
            <NavLink
              to="/products"
              className="block px-4 py-2 text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
            >
              Products
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavFullScreen