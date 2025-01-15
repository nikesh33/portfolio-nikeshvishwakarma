import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import Sidebar from "./Sidebar";
import DarkLightToggleButton from "./DarkLightToggleButton";
import logo from "../assets/images/logo.png";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { darkMode, toggleDarkLightMode } = useDarkMode();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <header
      className={`bg-custom-bg dark:bg-dark-bg text-white p-4 flex items-center justify-between w-full shadow-md transition duration-300 ease-in-out ${
        darkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
          : "bg-gradient-to-r from-blue-600 to-blue-400"
      }`}
    >
      {/* Hamburger Button (visible on small screens) */}
      {!isSidebarOpen && (
        <button
          aria-label="Toggle Sidebar"
          className="md:hidden flex flex-col justify-between items-center w-8 h-8 z-10"
          onClick={toggleSidebar}
        >
          <span className="h-1 w-full bg-white rounded-lg transition-transform duration-300"></span>
          <span className="h-1 w-full bg-white rounded-lg transition-all duration-300"></span>
          <span className="h-1 w-full bg-white rounded-lg transition-transform duration-300"></span>
        </button>
      )}

      {/* Website Title */}
      <div className="flex items-center justify-start md:order-1 order-2">
        <img
          src={logo}
          alt="Logo"
          className="w-auto h-16 md:h-20 transition-transform transform duration-300 ease-in-out hover:scale-110 hover:opacity-80"
        />
      </div>

      {/* Dark/Light Mode Toggle Button */}
      <div className="flex-grow flex justify-center md:order-2 order-1">
        <DarkLightToggleButton
          darkMode={darkMode}
          toggleDarkLightMode={toggleDarkLightMode}
        />
      </div>

      {/* Playful Rotating Icon */}
      <div className="relative flex items-center justify-center md:order-3 order-3">
        <FaCode className="text-2xl md:text-3xl text-green-400 animate-spin" />
      </div>

      {/* Navigation Links (always visible on medium+ screens) */}
      <nav className="hidden md:flex space-x-4 bg-custom-bg-100 p-2 rounded-lg md:order-4 order-4">
        {["home", "about", "projects", "contact"].map((link, index) => (
          <NavLink
            key={index}
            to={`/${link}`}
            className={({ isActive }) =>
              `text-white font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80 rounded-lg px-3 py-2 ${
                isActive ? "bg-teal-light" : ""
              }`
            }
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </NavLink>
        ))}
      </nav>

      {/* Sidebar Component (visible on small screens) */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        darkMode={darkMode}
      />
    </header>
  );
};

export default Navbar;
