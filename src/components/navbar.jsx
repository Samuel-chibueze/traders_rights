import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../images/logo.jpeg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav className="bg-[white] text-[#1a5d1a]  p-4 fixed top-0 left-0 w-full bb-2-red border-solid border-b-2 border-gray-200">
      <div className="container mx-auto flex items-center justify-between">
          <img className="w-[50px]" src={image} alt="" />
        <button
          className="lg:hidden text-[#1a5d1a] focus:outline-none"
          onClick={handleToggleMenu}
        >
          &#9776;
        </button>

        <div className="hidden lg:flex space-x-4">
          <NavLink
            to="/"
            className="hover:text-green-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-green-300"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-green-300"
          >
            Contact
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-green-300"
          >
            Services
          </NavLink>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-green-800 text-white py-4">
          <NavLink
            to="/"
            className="block py-2 px-4 hover:text-green-300"
            onClick={handleToggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block py-2 px-4 hover:text-green-300"
            onClick={handleToggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-2 px-4 hover:text-green-300"
            onClick={handleToggleMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/services"
            className="block py-2 px-4 hover:text-green-300"
            onClick={handleToggleMenu}
          >
            Services
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
