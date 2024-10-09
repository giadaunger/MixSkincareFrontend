import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="px-10 py-2 shadow-lg">
      <ul className="flex items-center">
        <NavLink to="/" className="shrink-0">
          <img src="/logo.png" alt="logo" className="h-28 w-28" />
        </NavLink>
        <div className="flex-grow text-right space-x-8">
          <NavLink
            to="/"
            className="inline-block transform transition duration-300 hover:scale-125 hover:text-[#ffb6c1]"
          >
            Compare Products
          </NavLink>
          <NavLink
            to="/"
            className="inline-block transform transition duration-300 hover:scale-125 hover:text-[#ffb6c1]"
          >
            Contact
          </NavLink>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
