import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { ChevronDown } from 'styled-icons/bootstrap';
import { ChevronUp } from 'styled-icons/bootstrap';

function NavFullScreen() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

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
          onClick={closeDropdown}
          to="/blog"
          className="px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
        >
          Blog
        </NavLink>
        <NavLink 
          onClick={closeDropdown}
          to="/about"
          className="px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
        >
          About
        </NavLink>
        <NavLink 
          onClick={closeDropdown}
          to="/sales"
          className="px-4 py-2 text-center text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
        >
          Sales
        </NavLink>
        <div className="relative mr-4">
          <div 
            onClick={toggleDropdown}
            className="flex items-center transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] cursor-pointer"
          >
            <p className="block px-4 py-2 text-center text-2xl">Tools</p>
            {isDropdownOpen ? (
              <ChevronUp className="w-5 h-5"/>
            ) : (
              <ChevronDown className="w-5 h-5"/>
            )}
          </div>
          {isDropdownOpen && (
            <div className="absolute -left-24 min-[1110px]:mt-0 z-20 w-56 bg-white shadow-lg rounded-b-lg">
              <NavLink
                onClick={closeDropdown}
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
                onClick={closeDropdown}
                to="/compare"
                className="block px-4 py-2 text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
              >
                Compare Products
              </NavLink>
              <NavLink
                onClick={closeDropdown}
                to="/products"
                className="block px-4 py-2 text-2xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
              >
                Products
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavFullScreen