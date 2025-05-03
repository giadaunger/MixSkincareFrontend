import React from 'react'
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-4 shadow-md">
      <div className="container mx-auto flex flex-col min-[1110px]:flex-row items-center justify-between border-t border-gray-200">
        <div>
          <NavLink to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="min-[1110px]:h-28 min-[1110px]:w-28 h-20 w-20"
            />
          </NavLink>
        </div>
        <div className="flex flex-col min-[1110px]:items-end">
          <NavLink
            to="/about"
            className="block px-4 py-1 text-xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-4 py-1 text-xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
          >
            Contact
          </NavLink>
          <NavLink
            to="/privacy-policy"
            className="block px-4 py-1 text-xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/cookie-policy"
            className="block px-4 py-1 text-xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
          >
            Cookie Policy
          </NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer