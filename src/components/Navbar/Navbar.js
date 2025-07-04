import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { path: "/", label: "Home", end: true },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/education", label: "Education" },
    //{ path: "/certifications", label: "Certifications" },
    //{ path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Welcome to My Portfolio
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ path, label, end }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={end}
                className={({ isActive }) =>
                  `hover:text-gray-400 transition ${
                    isActive ? "text-yellow-400" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <ul className="md:hidden bg-black px-6 pb-6 flex flex-col space-y-4">
          {navLinks.map(({ path, label, end }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={end}
                className={({ isActive }) =>
                  `block hover:text-gray-400 transition ${
                    isActive ? "text-yellow-400" : ""
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {/* Divider Line */}
      <div className="w-full h-[1px] bg-gray-500"></div>
    </nav>
  );
};

export default Navbar;
