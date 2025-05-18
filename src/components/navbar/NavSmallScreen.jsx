import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { X } from 'styled-icons/bootstrap';

function NavSmallScreen() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="justify-between flex flex-row">
        <NavLink 
          to="/"
          onClick={closeMenu}
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="min-[1110px]:h-28 min-[1110px]:w-28 h-20 w-20"
          />
        </NavLink>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X  className="w-10 h-10 text-[#E2A3B7]"/>
          ) : (
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
          )}
        </button>
      </div>
      {isOpen && (
        <div className="top-[84px] shadow-md">
          <div className="bg-white z-50 absolute w-full left-0 right-0 ">
            <div className="flex flex-col w-11/12 mx-auto mt-4">
              <NavLink 
                to="/skincare-dupes"
                className="py-2 text-xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] border-b border-gray-200"
                onClick={closeMenu}
              >
                Skincare Dupes
              </NavLink>
              <NavLink 
                to="/compare"
                className="py-2 text-xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] border-b border-gray-200"
                onClick={closeMenu}
              >
                Compare Products
              </NavLink>
              <NavLink 
                to="/products"
                className="py-2 text-xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] border-b border-gray-200"
                onClick={closeMenu}
              >
                Products
              </NavLink>
              <NavLink 
                to="/blog"
                className="py-2 text-xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] border-b border-gray-200"
                onClick={closeMenu}
              >
                Blog
              </NavLink>
              <NavLink 
                to="/about"
                className="py-2 text-xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7] border-b border-gray-200"
                onClick={closeMenu}
              >
                About
              </NavLink>
              <NavLink 
                to="/Sales"
                className="py-2 text-xl transform transition duration-300 hover:scale-110 hover:text-[#E2A3B7]"
                onClick={closeMenu}
              >
                Sales
              </NavLink>
            </div>
          </div>
          <div 
            className="fixed inset-0 top-[100px] bg-black bg-opacity-40 z-40" 
            onClick={() => setIsOpen(false)}>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavSmallScreen